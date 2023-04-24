import { ApiProperty } from "@nestjs/swagger";

export class DangKy {
    @ApiProperty({ description: "hoTen", type: String })
    ho_ten: string;
    @ApiProperty({ description: "email", type: String })
    email: string;
    @ApiProperty({ description: "soDt", type: String })
    so_dt: string;
    @ApiProperty({ description: "matKhau", type: String })
    mat_khau: string;
    @ApiProperty({ description: "loaiNguoiDung", type: String })
    loai_nguoi_dung: string;
    @ApiProperty({ description: "anhDaiDien", type: String })
    anh_dai_dien: string;
};

export class Login {
    @ApiProperty({ description: "email", type: String })
    email: string;
    @ApiProperty({ description: "matKhau", type: String })
    mat_khau: string;
}

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    fileUpload: any;
  }

