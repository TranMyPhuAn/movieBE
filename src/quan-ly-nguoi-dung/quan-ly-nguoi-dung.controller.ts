import { Controller, Get, Post, Body, Query, Put, Headers, Delete, Param, UseInterceptors, UploadedFile, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { QuanLyNguoiDungService } from './quan-ly-nguoi-dung.service';
import { NguoiDung } from '@prisma/client';
import { DangKy, FileUploadDto, Login } from './entities/quan-ly-nguoi-dung.entity';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';
import { ResponseDto } from 'src/response/response.dto';

@ApiTags("QuanLyNguoiDung")
@Controller('quan-ly-nguoi-dung')
export class QuanLyNguoiDungController {
  constructor(private readonly quanLyNguoiDungService: QuanLyNguoiDungService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get("/lay-danh-sach-loai-nguoi-dung")
  findLoaiNguoiDung(): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.findLoaiNguoiDung();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/dang-nhap")
  DangNhap(@Body() body: Login): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.DangNhap(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post("/dang-ky")
  createNguoiDung(@Body() body: DangKy): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.createNguoiDung(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-nguoi-dung")
  addNguoiDung(@Body() body: DangKy): Promise<NguoiDung> {
    try {
      return this.quanLyNguoiDungService.addNguoiDung(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiQuery({ name: "tuKhoa", required: false })
  @Get("/lay-danh-sach-nguoi-dung")
  findListNguoiDung(@Query("tuKhoa") tuKhoa: string = ""): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.findListNguoiDung(tuKhoa);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiQuery({ name: "tuKhoa", required: false })
  @ApiQuery({ name: "soTrang", required: false, example: "1" })
  @ApiQuery({ name: "soPhanTuTrenTrang", required: false, example: "4" })
  @Get("/lay-danh-sach-nguoi-dung-phan-trang")
  findListNguoiDungPng(@Query("tuKhoa") tuKhoa: string = "", @Query('soTrang') currentPage: number = 1, @Query('soPhanTuTrenTrang') limit: number = 4) {
    try {
      return this.quanLyNguoiDungService.findListNguoiDungPng(tuKhoa, Number(currentPage), Number(limit));
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiQuery({ name: "tuKhoa", required: false })
  @Get("/tim-kiem-nguoi-dung") //ho_ten || email
  findNguoiDung(@Query('tuKhoa') tuKhoa: string = ""): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.findNguoiDung(tuKhoa);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiQuery({ name: "tuKhoa", required: false })
  @ApiQuery({ name: "soTrang", required: false, example: "1" })
  @ApiQuery({ name: "soPhanTuTrenTrang", required: false, example: "2" })
  @Get("/tim-kiem-nguoi-dung-phan-trang")
  findNguoiDungPng(@Query('tuKhoa') tuKhoa: string = "", @Query('soTrang') currentPage: number = 1, @Query('soPhanTuTrenTrang') limit: number = 2): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.findNguoiDungPng(tuKhoa, Number(currentPage), Number(limit));
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-nguoi-dung")
  updateNguoiDung(@Headers("token") token: string, @Body() body: DangKy): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.updateNguoiDung(token, body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "upload avatar",
    type: FileUploadDto
  })
  @UseInterceptors(FileInterceptor("anhDaiDien", {
    storage: diskStorage({
      destination: process.cwd() + "/public/img",
      filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
    })
  }))
  @Put("/cap-nhat-anh-dai-dien/:taiKhoan")
  updateAvatar(@Param("taiKhoan") taiKhoan: string, @UploadedFile() file: Express.Multer.File): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.updateAvatar(taiKhoan, file.filename);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/xoa-nguoi-dung/:id")
  deleteNguoiDung(@Param('id') id: number): Promise<ResponseDto> {
    try {
      return this.quanLyNguoiDungService.deleteNguoiDung(Number(+id));
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}
