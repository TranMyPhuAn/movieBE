import { ApiProperty } from "@nestjs/swagger";

export class BannerDto {
    @ApiProperty({ description: "maPhim", type: Number })
    ma_phim: number;
    @ApiProperty({ description: "hinhAnh", type: String })
    hinh_anh: string;
  }

  export class BannerDtoUpdate {
    @ApiProperty({ description: "maBanner", type: Number })
    ma_banner: number;
    @ApiProperty({ description: "maPhim", type: Number })
    ma_phim: number;
    @ApiProperty({ description: "hinhAnh", type: String })
    hinh_anh: string;
  }