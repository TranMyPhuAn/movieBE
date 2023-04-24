import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NguoiDung, PrismaClient } from "@prisma/client";
import { DangKy, Login } from './entities/quan-ly-nguoi-dung.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';
import { ResponseDto, success200, success201 } from 'src/response/response.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class QuanLyNguoiDungService {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService
    ) { };
    prisma = new PrismaClient();

    async findLoaiNguoiDung(): Promise<ResponseDto> {
        let data = await this.prisma.nguoiDung.findMany({
            select: { loai_nguoi_dung: true },
            distinct: ['loai_nguoi_dung'],
        });
        return success200("Lấy danh sách loại người dùng thành công", data);
    };

    async DangNhap(login: Login): Promise<ResponseDto> {
        let { email, mat_khau } = login;

        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { email }
        });

        if (checkUser) {
            let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
            if (checkPass) {
                let token = this.jwtService.sign({ data: checkUser }, { secret: this.config.get("SECRET_KEY"), expiresIn: "5m" });

                return success200("Đăng nhập thành công", { user: checkUser, token });
            } else {
                throw new HttpException("Mật khẩu không chính xác!", HttpStatus.UNAUTHORIZED);
            }
        } else {
            throw new HttpException("Email không tồn tại!", HttpStatus.UNAUTHORIZED);
        }
    };

    async createNguoiDung(dangKy: DangKy): Promise<ResponseDto> {
        let { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung } = dangKy;

        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { email }
        });
        if (!checkUser) {
            let data = {
                ho_ten,
                email,
                so_dt,
                mat_khau: bcrypt.hashSync(mat_khau, 10),
                loai_nguoi_dung: 'CLIENT'
            };

            let createUser = await this.prisma.nguoiDung.create({ data: data });

            return success201("Tạo người dùng thành công", createUser);
        } else {
            throw new HttpException(`Email ${email} đã được đăng kí trong hệ thống!`, HttpStatus.CONFLICT);
        }
    };

    async addNguoiDung(dangKy: DangKy): Promise<NguoiDung> {
        let { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung, anh_dai_dien } = dangKy;

        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { email }
        });
        if (!checkUser) {
            let data = {
                ho_ten,
                email,
                so_dt,
                mat_khau: bcrypt.hashSync(mat_khau, 10),
                loai_nguoi_dung,
                anh_dai_dien
            };

            let createUser = await this.prisma.nguoiDung.create({ data: data });

            return createUser
        } else {
            throw new HttpException(`Email ${email} đã tồn tại trong hệ thống!`, HttpStatus.CONFLICT);
        }
    };

    async findListNguoiDung(tuKhoa: string): Promise<ResponseDto> {
        const [dataByHoTen, dataByEmail] = await Promise.all([
            this.prisma.nguoiDung.findMany({
                where: {
                    ho_ten: { contains: tuKhoa?.toLowerCase() }
                }
            }),
            this.prisma.nguoiDung.findMany({
                where: {
                    email: { contains: tuKhoa?.toLowerCase() }
                }
            })
        ]);

        const data = [...dataByHoTen, ...dataByEmail];

        return success200("Danh sách người dùng", data);
    };

    async findListNguoiDungPng(tuKhoa: string, currentPage: number, limit: number) {
        const skip = (currentPage - 1) * limit;

        const data = await this.prisma.nguoiDung.findMany({
            skip,
            take: limit,
            where: {
                OR: [
                    { ho_ten: { contains: tuKhoa?.toLowerCase() } },
                    { email: { contains: tuKhoa?.toLowerCase() } },
                ],
            }
        });

        // Tổng cộng người dùng có trong trang
        const count = data.length;

        // Tổng cộng người dùng có trong hệ thống
        const totalCount = await this.prisma.nguoiDung.count();

        // Tổng số trang
        const totalPages = Math.ceil(totalCount / limit);

        return {
            currentPage,
            count,
            totalPages,
            totalCount,
            items: data,
        };
    };

    async findNguoiDung(tuKhoa: string): Promise<ResponseDto> {
        const items = await this.prisma.nguoiDung.findMany({
            where: {
                OR: [
                    { email: { contains: tuKhoa.toLowerCase() } },
                    { ho_ten: { contains: tuKhoa.toLowerCase() } }
                ]
            }
        });

        return success200("xử lý thành công", items);
    };

    async findNguoiDungPng(tuKhoa: string, currentPage: number, limit: number): Promise<ResponseDto> {
        const skip = (currentPage - 1) * limit;

        const data = await this.prisma.nguoiDung.findMany({
            skip,
            take: limit,
            where: {
                OR: [
                    { email: { contains: tuKhoa.toLowerCase() } },
                    { ho_ten: { contains: tuKhoa.toLowerCase() } }
                ]
            }
        });

        // Tổng cộng người dùng có trong hệ thống
        const totalCount = await this.prisma.nguoiDung.count({
            where: {
                OR: [
                    { email: { contains: tuKhoa.toLowerCase() } },
                    { ho_ten: { contains: tuKhoa.toLowerCase() } }
                ]
            }
        });

        // Tổng người dùng có trong trang hiện tại
        const count = data.length;

        // Tổng số trang
        const totalPages = Math.ceil(totalCount / limit);

        return success200("Lấy danh sách thành công", {
            content: {
                currentPage,
                count,
                totalPages,
                totalCount,
            },
            users: data
        });
    };

    async updateNguoiDung(token: string, nguoiDung: DangKy): Promise<ResponseDto> {
        let { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung, anh_dai_dien } = nguoiDung;

        let decoded = this.jwtService.decode(token);
        if (typeof decoded === 'object' && decoded.hasOwnProperty('data')) {
            const taiKhoanToken = decoded.data.tai_khoan;

            // kiểm tra email mới có trùng với trong hệ thống không
            const emailConflict = await this.prisma.nguoiDung.findFirst({
                where: {
                    email: email,
                    NOT: {
                        tai_khoan: taiKhoanToken,
                    },
                },
            });

            if (emailConflict) {
                throw new HttpException("Email đã tồn tại trong hệ thống", HttpStatus.NOT_FOUND);
            }

            const update = await this.prisma.nguoiDung.update({
                where: { tai_khoan: taiKhoanToken },
                data: { ho_ten, email, so_dt, mat_khau: bcrypt.hashSync(mat_khau, 10), loai_nguoi_dung, anh_dai_dien }
            });

            return success200("Update thành công", update);
        } else {
            throw new HttpException("Token không hợp lệ", HttpStatus.UNAUTHORIZED);
        }
    };

    async updateAvatar(taiKhoan: string, file: string): Promise<ResponseDto> {
        let data = await this.prisma.nguoiDung.findFirst({
            where: {
                tai_khoan: Number(taiKhoan)
            }
        })

        data.anh_dai_dien = file;
        const dataUp = await this.prisma.nguoiDung.update({
            where: {
                tai_khoan: Number(taiKhoan)
            },
            data
        })

        return success200("Cập nhật ảnh đại diện thành công", dataUp);

    };

    async deleteNguoiDung(id: number): Promise<ResponseDto> {
        const nguoiDung = await this.prisma.nguoiDung.findUnique({
            where: { tai_khoan: id },
        });
        if (!nguoiDung) {
            throw new NotFoundException(`Không tìm thấy người dùng có id = ${id}`);
        }

        const data = await this.prisma.nguoiDung.delete({
            where: { tai_khoan: id }
        });

        return success200(`xóa thành công người dùng có taiKhoan là: ${nguoiDung}`, data)
    };

}
