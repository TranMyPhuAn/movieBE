import { ApiProperty } from "@nestjs/swagger";


export class VeDto {
    @ApiProperty({ description: "maGhe", type: Number })
    ma_ghe: number;
}

export class DatVeDto {
    @ApiProperty({ description: "taiKhoan", type: Number })
    tai_khoan: number;
    @ApiProperty({ description: "maLichChieu", type: Number })
    ma_lich_chieu: number;
    @ApiProperty({ description: "danhSachGhe", type: () => VeDto })
    danhSachGhe: VeDto[];
}

export class LichChieuDto {
    @ApiProperty({ description: "maPhim", type: Number })
    ma_phim: number;
    @ApiProperty({ description: "maRap", type: Number })
    ma_rap: number;
    @ApiProperty({ description: "ngayGioChieu", type: Date })
    ngay_gio_chieu: Date;
    @ApiProperty({ description: "giaVe", type: Number })
    gia_ve: number;
}
