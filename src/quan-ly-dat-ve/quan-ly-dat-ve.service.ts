import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient, DatVe, LichChieu } from '@prisma/client';
import { DatVeDto, LichChieuDto } from './entities/quan-ly-dat-ve.entity';
import { ResponseDto, error404, failCode, success200, success201 } from 'src/response/response.dto';


@Injectable()
export class QuanLyDatVeService {
  prisma = new PrismaClient();


  async createDatVe(datVeDto: DatVeDto): Promise<ResponseDto> {
    const { tai_khoan, ma_lich_chieu, danhSachGhe } = datVeDto;

    const lichChieu = await this.prisma.lichChieu.findFirst({
      where: { ma_lich_chieu }
    });
    if (!lichChieu) {
      throw new HttpException('Không tìm thấy lịch chiếu.', HttpStatus.NOT_FOUND);
    }

    const nguoiDung = await this.prisma.nguoiDung.findFirst({
      where: { tai_khoan },
    });
    if (!nguoiDung) {
      throw new HttpException("Không tìm thấy người dùng.", HttpStatus.NOT_FOUND);
    }

    const ghes = await this.prisma.ghe.findMany({ where: { ma_ghe: { in: danhSachGhe.map((ghe) => ghe.ma_ghe) } } });
    if (!ghes) {
      throw new HttpException('Ghế không tồn tại! Bạn vui lòng chọn ghế có trong hệ thống', HttpStatus.BAD_REQUEST);
    }

    const daDat = await this.prisma.datVe.findFirst({
      where: {
        tai_khoan,
        ma_lich_chieu,
        ma_ghe: { in: danhSachGhe.map((ve) => ve.ma_ghe) }
      }
    });
    if (daDat) {
      throw new HttpException(`Ghế ${daDat.ma_ghe} đã đặt! Bạn vui lòng chọn ghế khác`, HttpStatus.BAD_REQUEST);
    }

    const datVe = await Promise.all(
      danhSachGhe.map((ghe) =>
        this.prisma.datVe.create({
          data: {
            tai_khoan,
            ma_lich_chieu,
            ma_ghe: ghe.ma_ghe
          },
        }),
      ),
    );

    return success201("Đặt vé thành công", { lichChieu, veDaDat: datVe });
  };

  async findAll(maLichChieu: number): Promise<LichChieu> {
      const lichChieu = await this.prisma.lichChieu.findUnique({
        where: {
          ma_lich_chieu: maLichChieu,
        },
        include: {
          Phim: true,
          RapPhim: {
            include: {
              Ghe: true
            }
          }
        }
      });

      if (!lichChieu) {
        throw new HttpException('Không tìm thấy lịch chiếu.', HttpStatus.NOT_FOUND);
      }

      return lichChieu;
  };

  async createLichChieu(lichChieuDto: LichChieuDto): Promise<ResponseDto> {
      const { ma_phim, ma_rap, ngay_gio_chieu, gia_ve } = lichChieuDto;

      const phim = await this.prisma.phim.findFirst({
        where: { ma_phim }
      });
      if (!phim) {
        throw new HttpException("Không tìm thấy phim!", HttpStatus.NOT_FOUND);
      }

      const rapPhim = await this.prisma.rapPhim.findFirst({
        where: { ma_rap }
      });
      if (!rapPhim) {
        throw new HttpException("Không tìm thấy rap phim!", HttpStatus.NOT_FOUND);
      }

      const lichChieu = await this.prisma.lichChieu.findFirst({
        where: {
          ma_phim,
          ma_rap
        },
        include: { Phim: true, RapPhim: true },
      });
      if (lichChieu) {
        throw new HttpException('Phim này đã có trong danh sách lịch chiếu', HttpStatus.NOT_FOUND);
      }

      const data = await this.prisma.lichChieu.create({
        data: {
          ma_phim,
          ma_rap,
          ngay_gio_chieu: new Date(ngay_gio_chieu),
          gia_ve
        }
      });

      return success201("Tạo lịch chiếu thành công", data);
  };

}
