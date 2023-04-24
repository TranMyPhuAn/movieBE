import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { QuanLyPhimService } from './quan-ly-phim.service';
import { CreateQuanLyPhimDto } from './dto/create-quan-ly-phim.dto';
import { Banner } from '@prisma/client';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/response/response.dto';
import { PhimDto } from './entities/quan-ly-phim.entity';
import { AuthGuard } from '@nestjs/passport';
import { BannerDto, BannerDtoUpdate } from './entities/quan-ly-banner.entity';

@ApiTags("QuanLyPhim")
@Controller('quan-ly-phim')
export class QuanLyPhimController {
  constructor(private readonly quanLyPhimService: QuanLyPhimService) { }


  @Get("/lay-danh-sach-banner")
  async findListBanner(): Promise<Banner[]> {
    try {
      return await this.quanLyPhimService.findListBanner();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiQuery({ name: "maNhom", required: false, example: "GP03" })
  @Get("/lay-danh-sach-phim")
  findListPhim(@Query('maNhom') maNhom: string, @Query('tenPhim') tenPhim: string): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.findListPhim(maNhom, tenPhim);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiQuery({ name: "maNhom", required: false, example: "GP03" })
  @ApiQuery({ name: "soTrang", required: false, example: "1" })
  @ApiQuery({ name: "soPhanTuTrenTrang", required: false, example: "10" })
  @Get("/lay-danh-sach-phim-phan-trang")
  async findListPhimPng(@Query('maNhom') maNhom: string, @Query('tenPhim') tenPhim: string, @Query('soTrang') currentPage: number, @Query('soPhanTuTrenTrang') limit: number) {
    try {
      const result = await this.quanLyPhimService.findListPhimPng(maNhom, tenPhim, Number(currentPage), Number(limit));
      return {
        content: {
          currentPage,
          count: result.content.data.length,
          totalPages: result.content.totalPage,
          totalCount: result.content.data.length * result.content.totalPage,
        },
        items: result.content.data,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiQuery({ name: "maNhom", required: false, example: "GP03" })
  @ApiQuery({ name: "tenPhim", required: false })
  @ApiQuery({ name: "soTrang", required: false, example: "1" })
  @ApiQuery({ name: "soPhanTuTrenTrang", required: false, example: "10" })
  @ApiQuery({ name: "tuNgay", required: false, example: "2023-04-10 00:00:00" })
  @ApiQuery({ name: "denNgay", required: false, example: "2023-04-15 00:00:00" })
  @Get("/lay-danh-sach-phim-theo-ngay")
  async getListPhimByDate(
    @Query('maNhom') maNhom: string,
    @Query('tenPhim') tenPhim: string = "",
    @Query('soTrang') soTrang: number,
    @Query('soPhanTuTrenTrang') soPhanTuTrenTrang: number,
    @Query('tuNgay') fromDate: Date,
    @Query('denNgay') toDate: Date,
  ): Promise<ResponseDto> {
    try {
      return await this.quanLyPhimService.getListPhimByDate(maNhom, tenPhim, Number(soTrang), Number(soPhanTuTrenTrang), fromDate, toDate);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-phim")
  createPhim(@Body() body: PhimDto): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.createPhim(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-phim")
  updatePhim(@Body() body: CreateQuanLyPhimDto): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.updatePhim(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete('xoa-phim/:id')
  removePhim(@Param('id') id: number): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.removePhim(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-banner")
  createBanner(@Body() body: BannerDto): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.createBanner(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-banner")
  updateBanner(@Body() body: BannerDtoUpdate) {
    try {
      return this.quanLyPhimService.updateBanner(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete('xoa-banner/:id')
  removeBanner(@Param('id') id: number): Promise<ResponseDto> {
    try {
      return this.quanLyPhimService.removeBanner(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }




}
