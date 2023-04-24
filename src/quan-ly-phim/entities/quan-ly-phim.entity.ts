
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class PhimDto {
  @ApiProperty({ description: "tenPhim", type: String })
  ten_phim: string;
  @ApiProperty({ description: "biDanh", type: String })
  bi_danh: string;
  @ApiProperty({ description: "trailer", type: String })
  trailer: string;
  @ApiProperty({ description: "hinhAnh", type: String })
  hinh_anh: string;
  @ApiProperty({ description: "moTa", type: String })
  mo_ta: string;
  @ApiProperty({ description: "maNhom", type: String })
  ma_nhom: string;
  @ApiProperty({ description: "ngayKhoiChieu", type: Date })
  ngay_khoi_chieu: Date;
  @ApiProperty({ description: "danhGia", type: Number })
  danh_gia: number;
  @ApiProperty({ description: "hot", type: Boolean })
  hot: boolean;
  @ApiProperty({ description: "dangChieu", type: Boolean })
  dang_chieu: boolean;
  @ApiProperty({ description: "SapChieu", type: Boolean })
  sap_chieu: boolean;
}


export class NgayInput {
    @IsDateString()
    @IsOptional()
    tu_ngay: Date;
  
    @IsDateString()
    @IsOptional()
    den_ngay: Date;
  }
