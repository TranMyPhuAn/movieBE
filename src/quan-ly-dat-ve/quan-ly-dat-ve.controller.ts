import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { QuanLyDatVeService } from './quan-ly-dat-ve.service';
import { DatVe, LichChieu } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DatVeDto, LichChieuDto } from './entities/quan-ly-dat-ve.entity';
import { ResponseDto } from 'src/response/response.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags("QuanLyDatVe")
@Controller('quan-ly-dat-ve')
export class QuanLyDatVeController {
  constructor(private readonly quanLyDatVeService: QuanLyDatVeService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/dat-ve")
  createDatVe(@Body() datVeDto: DatVeDto): Promise<ResponseDto> {
    try {
      return this.quanLyDatVeService.createDatVe(datVeDto);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/lay-danh-sach-phong-ve/:maLichChieu')
  findAll(@Param('maLichChieu') maLichChieu: number): Promise<LichChieu> {
    try {
      return this.quanLyDatVeService.findAll(+maLichChieu);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.BAD_REQUEST);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post("/tao-lich-chieu")
  createLichChieu(@Body() lichChieuDto: LichChieuDto): Promise<ResponseDto> {
    try {
      return this.quanLyDatVeService.createLichChieu(lichChieuDto);
    } catch (error) {
      throw new HttpException("Lỗi BE", HttpStatus.BAD_REQUEST);
    }
  }

}
