import { ApiProperty } from "@nestjs/swagger";

export class HeThongRapDTO {
    @ApiProperty({ description: "maHeThongRap", type: String })
    ma_he_thong_rap: string;
    @ApiProperty({ description: "tenHeThongRap", type: String })
    ten_he_thong_rap: string;
    @ApiProperty({ description: "biDanh", type: String })
    bi_danh: string;
    @ApiProperty({ description: "logo", type: String })
    logo: string;
}


export class CumRapDTO {
    @ApiProperty({ description: "maCumRap", type: Number })
    ma_cum_rap: number;
    @ApiProperty({ description: "tenCumRap", type: String })
    ten_cum_rap: string;
    @ApiProperty({ description: "diaChi", type: String })
    dia_chi: string;
    @ApiProperty({ description: "maHeThongRap", type: String })
    ma_he_thong_rap: string;
}


export class RapPhimDTO {
    @ApiProperty({ description: "maRap", type: Number })
    ma_rap: number;
    @ApiProperty({ description: "tenRap", type: String })
    ten_rap: string;
    @ApiProperty({ description: "maCumRap", type: Number })
    ma_cum_rap: number;
}
