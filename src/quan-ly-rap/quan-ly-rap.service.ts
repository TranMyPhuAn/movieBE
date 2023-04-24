import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CumRap, PrismaClient } from "@prisma/client";
import { ResponseDto, error404, success200 } from 'src/response/response.dto';
import { CumRapDTO, HeThongRapDTO, RapPhimDTO } from './entities/quan-ly-rap.entity';

@Injectable()
export class QuanLyRapService {
  prisma = new PrismaClient();



  async findHeThongRap(maHeThongRap: string): Promise<ResponseDto> {
    const data = await this.prisma.heThongRap.findMany({
      where: { ma_he_thong_rap: { contains: maHeThongRap.toLowerCase() } },
      include: { CumRap: true }
    });

    return success200("Xử lý thành công", data);
  };

  async findCumRap(maHeThongRap: string): Promise<ResponseDto> {
    const data = await this.prisma.cumRap.findMany({
      where: { ma_he_thong_rap: { contains: maHeThongRap.toLowerCase() } },
      include: { RapPhim: true }
    });

    return success200("Xử lý thành công", data);
  };

  async findLichChieuHTR(maNhom: string, maHeThongRap: string): Promise<ResponseDto> {
    const data = await this.prisma.lichChieu.findMany({
      where: {
        RapPhim: {
          CumRap: {
            HeThongRap: {
              ma_he_thong_rap: maHeThongRap
            }
          }
        },
        Phim: {
          ma_nhom: maNhom
        }
      },
      include: {
        Phim: true,
        RapPhim: {
          include: {
            CumRap: true
          }
        }
      }
    });

    return success200("Xử lý thành công", data);
  };

  async findLichChieuPhim(maPhim: number): Promise<ResponseDto> {
    if (maPhim) {
      const data = await this.prisma.lichChieu.findMany({
        where: { ma_phim: Number(maPhim) },
        include: {
          Phim: true,
          RapPhim: {
            include: {
              CumRap: true
            }
          }
        }
      });
      if (data.length < 1) {
        throw new HttpException("Mã phim không tồn tại", HttpStatus.NOT_FOUND);
      }

      return success200("Xử lý thành công", data);
    } else {
      throw new HttpException("vui lòng truyền vào mã phim", HttpStatus.NOT_FOUND);
    }
  };

  async findGheList(maRap: number): Promise<ResponseDto> {
    const data = await this.prisma.ghe.findMany({
      where: { ma_rap: Number(maRap) }
    });

    if (data.length < 1) {
      throw new HttpException("hiện chưa có ghế nào!", HttpStatus.BAD_REQUEST);
    } else {
      return success200("Xử lý thành công", data);
    }

  };

  async createHTR(body: HeThongRapDTO): Promise<ResponseDto> {
    const { ma_he_thong_rap, ten_he_thong_rap, bi_danh, logo } = body;

    const checkHTR = await this.prisma.heThongRap.findFirst({
      where: { ma_he_thong_rap }
    });

    if (checkHTR) {
      throw new HttpException("maHeThongRap đã tồn tại!", HttpStatus.NOT_FOUND);
    } else {
      const data = await this.prisma.heThongRap.create({ data: { ma_he_thong_rap, ten_he_thong_rap, bi_danh, logo } });
      return success200("Thêm hệ thống rạp thành công", data);
    }
  };

  async updateHTR(body: HeThongRapDTO): Promise<ResponseDto> {
    const { ma_he_thong_rap, ten_he_thong_rap, bi_danh, logo } = body

    const checkHTR = await this.prisma.heThongRap.findFirst({
      where: { ma_he_thong_rap }
    });

    if (checkHTR) {
      const data = await this.prisma.heThongRap.update({
        where: { ma_he_thong_rap },
        data: { ma_he_thong_rap, ten_he_thong_rap, bi_danh, logo }
      });

      return success200("sửa hệ thống rạp thành công", data);
    } else {
      return error404("Mã hệ thống rạp không tồn tại");
    }
  };

  async createCumRap(body: CumRapDTO): Promise<ResponseDto> {
    const { ten_cum_rap, dia_chi, ma_he_thong_rap } = body;

    const checkMaHTR = await this.prisma.heThongRap.findFirst({
      where: { ma_he_thong_rap }
    });

    if (checkMaHTR) {
      const data = await this.prisma.cumRap.create({ data: { ten_cum_rap, dia_chi, ma_he_thong_rap } });
      return success200("Thêm banner thành công", data);
    } else {
      throw new HttpException("mã hệ thống rạp không tồn tại", HttpStatus.NOT_FOUND);
    }
  };

  async updateCumRap(body: CumRapDTO): Promise<ResponseDto> {
    const { ma_cum_rap, ten_cum_rap, dia_chi, ma_he_thong_rap } = body

    const checkMaHTR = await this.prisma.heThongRap.findFirst({
      where: { ma_he_thong_rap }
    });
    if (!checkMaHTR) {
      throw new HttpException("mã hệ thống rạp không tồn tại", HttpStatus.NOT_FOUND);
    }

    const checkMaCR = await this.prisma.cumRap.findFirst({
      where: { ma_cum_rap: Number(ma_cum_rap) }
    });
    if (checkMaCR) {
      const data = await this.prisma.cumRap.update({
        where: { ma_cum_rap: Number(ma_cum_rap) },
        data: { ten_cum_rap, dia_chi, ma_he_thong_rap }
      });

      return success200("sửa cụm rạp thành công", data);
    } else {
      return error404("Mã cụm rạp không tồn tại");
    }
  };

  async createRapPhim(body: RapPhimDTO): Promise<ResponseDto> {
    const { ten_rap, ma_cum_rap } = body;

    const checkMaCR = await this.prisma.cumRap.findFirst({
      where: { ma_cum_rap }
    });

    if (checkMaCR) {
      const data = await this.prisma.rapPhim.create({ data: { ten_rap, ma_cum_rap } });
      return success200("Thêm rạp phim thành công", data);
    } else {
      throw new HttpException("mã cụm rạp không tồn tại", HttpStatus.NOT_FOUND);
    }
  };

  async updateRapPhim(body: RapPhimDTO): Promise<ResponseDto> {
    const { ma_rap, ten_rap, ma_cum_rap } = body

    const checkMaRap = await this.prisma.rapPhim.findFirst({
      where: { ma_rap: Number(ma_rap) }
    });
    if (!checkMaRap) {
      throw new HttpException("mã rạp không tồn tại", HttpStatus.NOT_FOUND);
    }

    const checkMaCR = await this.prisma.cumRap.findFirst({
      where: { ma_cum_rap: Number(ma_cum_rap) }
    });
    if (checkMaCR) {
      const data = await this.prisma.rapPhim.update({
        where: { ma_rap: Number(ma_rap) },
        data: { ma_rap, ten_rap, ma_cum_rap }
      });

      return success200("sửa rạp phim thành công", data);
    } else {
      return error404("Mã cụm rạp không tồn tại");
    }
  };

  async createGhe(so: number, chuCai: number, maRap: number): Promise<string | ResponseDto> {
    const checkMaRap = await this.prisma.rapPhim.findFirst({
      where: { ma_rap: Number(maRap) }
    });

    if (checkMaRap) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const gheList = [];
      const gheVip = "A1,B1,C1,D1,E1,F1,G1,H1,I1,J1,K1,L1,M1,N1,O1,P1,Q1,R1,S1,T1,U1,V1,W1,X1,Y1,Z1,A2,B2,C2,D2,E2,F2,G2,H2,I2,J2,K2,L2,M2,N2,O2,P2,Q2,R2,S2,T2,U2,V2,W2,X2,Y2,Z2";

      for (let i = 1; i <= so; i++) {
        for (let j = 0; j < chuCai; j++) {
          // A1, B1, C1
          const tenGhe = alphabet[j] + i;

          // có trong gheVip thì trả về true
          const isGheVip = gheVip.includes(tenGhe);

          gheList.push({
            ten_ghe: tenGhe,
            loai_ghe: isGheVip ? "gheVip" : "gheThuong",
            ma_rap: Number(maRap)
          });
        }
      }

      const checkGhe = await this.prisma.ghe.findFirst({
        where: {
          ma_rap: Number(maRap)
        }
      })
      if (checkGhe) {
        return `Mã rạp ${maRap} đã được tạo ghế rồi`
      }

      const data = await this.prisma.ghe.createMany({ data: gheList });

      return success200(`Tạo thành công ${data.count} ghế cho Rạp Phim ${maRap} và 2 hàng trên là ghế VIP`)
    } else {
      throw new HttpException("maRap không tồn tại!", HttpStatus.NOT_FOUND);
    }
  };

  async deleteGhe(maRap: number): Promise<ResponseDto> {
    const data = await this.prisma.ghe.deleteMany({
      where: { ma_rap: maRap }
    })

    return success200(`xóa thành công ${data} ghế có mã rạp ${maRap}`)
  };



}
