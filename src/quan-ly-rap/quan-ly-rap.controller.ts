import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus, UseGuards, Put } from '@nestjs/common';
import { QuanLyRapService } from './quan-ly-rap.service';
import { CreateQuanLyRapDto } from './dto/create-quan-ly-rap.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/response/response.dto';
import { AuthGuard } from '@nestjs/passport';
import { CumRapDTO, HeThongRapDTO, RapPhimDTO } from './entities/quan-ly-rap.entity';


@ApiTags("QuanLyRap")
@Controller('quan-ly-rap')
export class QuanLyRapController {
  constructor(private readonly quanLyRapService: QuanLyRapService) { }


  @ApiQuery({ name: "maHeThongRap", required: false })
  @Get("/lay-thong-tin-he-thong-rap")
  findHeThongRap(@Query("maHeThongRap") maHeThongRap: string = ""): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.findHeThongRap(maHeThongRap);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("/lay-thong-tin-cum-rap")
  findCumRap(@Query("maHeThongRap") maHeThongRap: string = ""): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.findCumRap(maHeThongRap);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiQuery({ name: "maNhom", required: false, example: "GP03" })
  @ApiQuery({ name: "maHeThongRap", required: false, example: "CGV" })
  @Get("/lay-thong-tin-lich-chieu-he-thong-rap")
  findLichChieuHTR(@Query("maNhom") maNhom: string, @Query("maHeThongRap") maHeThongRap: string): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.findLichChieuHTR(maNhom, maHeThongRap);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("/lay-thong-tin-lich-chieu-phim")
  findLichChieuPhim(@Query("maPhim") maPhim: number): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.findLichChieuPhim(maPhim);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get("/danh-sach-ghe")
  findGheList(@Query("maRap") maRap: number): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.findGheList(maRap);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-he-thong-rap")
  createHTR(@Body() body: HeThongRapDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.createHTR(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-he-thong-rap")
  updateHTR(@Body() body: HeThongRapDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.updateHTR(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-cum-rap")
  createCumRap(@Body() body: CumRapDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.createCumRap(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-cum-rap")
  updateCumRap(@Body() body: CumRapDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.updateCumRap(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/them-rap-phim")
  createRapPhim(@Body() body: RapPhimDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.createRapPhim(body)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put("/cap-nhat-rap-phim")
  updateRapPhim(@Body() body: RapPhimDTO): Promise<ResponseDto> {
    try {
      return this.quanLyRapService.updateRapPhim(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @ApiQuery({ name: "soHangDoc", required: true, example: "10" })
  @ApiQuery({ name: "chuCaiHangNgang", required: true, example: "10" })
  @Post("them-ghe")
  createGhe(@Query("soHangDoc") so: number, @Query("chuCaiHangNgang") chuCai: number, @Query("maRap") maRap: number): Promise<string | ResponseDto> {
    try {
      return this.quanLyRapService.createGhe(so, chuCai, maRap);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("xoa-ghe")
  deleteGhe(@Query("maRap") maRap: number): Promise<ResponseDto> {
    return this.quanLyRapService.deleteGhe(Number(maRap));
  }

}
