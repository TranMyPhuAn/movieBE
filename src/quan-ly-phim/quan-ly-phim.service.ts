import { error404, success200 } from './../response/response.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Banner, PrismaClient } from "@prisma/client";
import { CreateQuanLyPhimDto } from './dto/create-quan-ly-phim.dto';
import { PhimDto } from './entities/quan-ly-phim.entity';
import { ResponseDto } from 'src/response/response.dto';
import { BannerDto, BannerDtoUpdate } from './entities/quan-ly-banner.entity';

@Injectable()
export class QuanLyPhimService {
  prisma = new PrismaClient();


  async findListBanner(): Promise<Banner[]> {
      return await this.prisma.banner.findMany();
  };

  async findListPhim(maNhom: string, tenPhim: string): Promise<ResponseDto> {
      const data = await this.prisma.phim.findMany({
        where: {
          AND: [
            { ma_nhom: maNhom },
            { ten_phim: { contains: tenPhim.toLowerCase() } },
          ],
        }
      });

      return success200("Lấy danh sách phim thành công", data);
  };

  async findListPhimPng(maNhom: string, tenPhim: string, currentPage: number, limit: number): Promise<ResponseDto> {
      const skip = (currentPage - 1) * limit;

      const data = await this.prisma.phim.findMany({
        skip,
        take: limit,
        where: {
          AND: [
            { ma_nhom: maNhom },
            { ten_phim: { contains: tenPhim.toLowerCase() } }
          ]
        },
      });

      const count = await this.prisma.phim.count({
        where: {
          AND: [
            { ma_nhom: maNhom },
            { ten_phim: { contains: tenPhim.toLowerCase() } }
          ]
        },
      });

      const totalPage = Math.ceil(count / limit);

      return success200("xử lý thành công", { data, totalPage });

  };

  async getListPhimByDate(maNhom: string, tenPhim: string, soTrang: number, soPhanTuTrenTrang: number, fromDate: Date, toDate: Date): Promise<ResponseDto> {
      const skip = (soTrang - 1) * soPhanTuTrenTrang;
      const data = await this.prisma.phim.findMany({
        skip,
        take: soPhanTuTrenTrang,
        where: {
          ma_nhom: maNhom,
          ten_phim: {
            contains: tenPhim.toLowerCase()
          },
          ngay_khoi_chieu: {
            gte: new Date(fromDate),
            lte: new Date(toDate)
          }
        },
      });
      const count = await this.prisma.phim.count({
        where: {
          ma_nhom: maNhom,
          ten_phim: {
            contains: tenPhim.toLowerCase()
          },
          ngay_khoi_chieu: {
            gte: new Date(fromDate),
            lte: new Date(toDate)
          }
        },
      });
      const totalPage = Math.ceil(count / soPhanTuTrenTrang);

      return success200("Xử lý thành công", { data, totalPage });
  };

  async createPhim(body: PhimDto): Promise<ResponseDto> {
      const { ten_phim, bi_danh, trailer, hinh_anh, mo_ta, ma_nhom, ngay_khoi_chieu, danh_gia, hot, dang_chieu, sap_chieu } = body;
      const phim = {
        ten_phim,
        bi_danh,
        trailer,
        hinh_anh,
        mo_ta,
        ma_nhom,
        ngay_khoi_chieu: new Date(ngay_khoi_chieu),
        danh_gia,
        hot,
        dang_chieu,
        sap_chieu
      };
      const data = await this.prisma.phim.create({ data: phim });
      return success200("Thêm phim thành công", data);
  };

  async updatePhim(body: CreateQuanLyPhimDto): Promise<ResponseDto> {
      const { ngay_khoi_chieu, ...rest } = body;

      const updateData: any = { ...rest };

      if (ngay_khoi_chieu) {
        updateData.ngay_khoi_chieu = new Date(ngay_khoi_chieu);
      }

      const checkMaPhim = await this.prisma.phim.findFirst({
        where: { ma_phim: Number(body.ma_phim) }
      });

      if (checkMaPhim) {
        const data = await this.prisma.phim.update({
          where: { ma_phim: Number(body.ma_phim) },
          data: updateData
        });

        return success200("sửa phim thành công", data);
      } else {
        return error404("Mã phim không tồn tại");
      }
  };

  async removePhim(id: number): Promise<ResponseDto> {
      const checkMaPhim = await this.prisma.phim.findFirst({
        where: { ma_phim: Number(id) }
      });
      if(checkMaPhim){
        const data = await this.prisma.phim.delete({
          where: {
            ma_phim: Number(id),
          },
        });

        return success200(`xóa thành công phim có maPhim: ${id}`, data);        
      }else {
        throw new HttpException("Mã phim không tồn tại", HttpStatus.NOT_FOUND);
      }
  };

  async createBanner(body: BannerDto): Promise<ResponseDto>  {
      const { ma_phim, hinh_anh } = body;

      const checkPhim = await this.prisma.phim.findFirst({
        where: { ma_phim : Number(ma_phim)}
      });

      if(checkPhim){
        const data = await this.prisma.banner.create({ data: { ma_phim, hinh_anh } });
        return success200("Thêm banner thành công", data);
      }else{
        throw new HttpException("maPhim không tồn tại!", HttpStatus.NOT_FOUND);
      }
  };

  async updateBanner(body: BannerDtoUpdate) {
    const { ma_banner, ma_phim, hinh_anh } = body

    const checkMaBanner = await this.prisma.banner.findFirst({
      where: { ma_banner: Number(ma_banner) }
    });

    if (checkMaBanner) {
      const data = await this.prisma.banner.update({
        where: { ma_banner: Number(ma_banner) },
        data: { ma_phim, hinh_anh }
      });

      return success200("sửa banner thành công", data);
    } else {
      return error404("Mã Banner không tồn tại");
    }
};

  async removeBanner(id: number): Promise<ResponseDto> {
      const chechBanner = await this.prisma.banner.findFirst({
        where: { ma_banner: Number(id) }
      });
      if(chechBanner){
        const data = await this.prisma.banner.delete({
          where: {
            ma_banner: Number(id),
          },
        });
        
        return success200(`xóa thành công banner có maBanner: ${id}`, data);        
      }else {
        throw new HttpException("Mã banner không tồn tại", HttpStatus.NOT_FOUND);
      }
  };
}
