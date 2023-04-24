-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Banner`;
CREATE TABLE `Banner` (
  `ma_banner` int NOT NULL AUTO_INCREMENT,
  `ma_phim` int NOT NULL,
  `hinh_anh` varchar(150) NOT NULL,
  PRIMARY KEY (`ma_banner`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `Banner_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(1,	10001,	'https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png'),
(2,	10002,	'https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png'),
(3,	10003,	'https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png');

DROP TABLE IF EXISTS `CumRap`;
CREATE TABLE `CumRap` (
  `ma_cum_rap` int NOT NULL AUTO_INCREMENT,
  `ten_cum_rap` varchar(100) NOT NULL,
  `dia_chi` varchar(200) NOT NULL,
  `ma_he_thong_rap` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ma_cum_rap`),
  KEY `ma_he_thong_rap` (`ma_he_thong_rap`),
  CONSTRAINT `CumRap_ibfk_1` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap` (`ma_he_thong_rap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(100,	'BHD Star Cineplex - 3/2',	'L5-Vincom 3/2, 3C Đường 3/2, Q.10',	'BHDStar'),
(101,	'BHD Star Cineplex - Bitexco',	'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',	'BHDStar'),
(102,	'BHD Star Cineplex - Phạm Hùng',	'L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh',	'BHDStar'),
(103,	'BHD Star Cineplex - Vincom Lê Văn Việt',	'L4-Vincom Plaza, 50 Lê Văn Việt, Q.9',	'BHDStar'),
(104,	'BHD Star Cineplex - Vincom Quang Trung',	'B1-Vincom QT, 190 Quang Trung, Gò Vấp',	'BHDStar'),
(105,	'BHD Star Cineplex - Vincom Thảo Điền',	'L5-Megamall, 159 XL Hà Nội, Q.2',	'BHDStar'),
(106,	'cgv-aeon-binh-tan',	'Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân',	'CGV'),
(107,	'CGV - Aeon Tân Phú',	'30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú',	'CGV'),
(108,	'CGV - CGV Saigonres Nguyễn Xí',	'Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh',	'CGV'),
(109,	'CGV - Crescent Mall',	'Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7',	'CGV'),
(110,	'CGV - CT Plaza',	'60A Trường Sơn,P. 2, Tân Bình',	'CGV'),
(111,	'CGV - Golden Plaza',	'Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5',	'CGV'),
(112,	'CGV - Hoàng Văn Thụ',	'Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân Bình',	'CGV'),
(113,	'CGV - Hùng Vương Plaza',	'Lầu 7, 126 Hùng Vương, Q. 5',	'CGV'),
(114,	'CGV - IMC Trần Quang Khải',	'T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1',	'CGV'),
(115,	'CGV - Liberty Citypoint',	'Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pateur, Q. 1',	'CGV'),
(116,	'CGV - Pandora City',	'Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú',	'CGV'),
(117,	'CGV - Paragon',	'Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7',	'CGV'),
(118,	'CGV - Parkson Đồng Khởi',	'Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến Nghé, Q.1',	'CGV'),
(119,	'CGV - Pearl Plaza',	'Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh',	'CGV'),
(120,	'CGV - Satra Củ Chi',	'T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM',	'CGV'),
(121,	'CGV - Sư Vạn Hạnh',	'T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10',	'CGV'),
(122,	'CGV - Vincom Đồng Khởi',	'Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1',	'CGV'),
(123,	'CGV - Vincom Gò Vấp',	'Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp',	'CGV'),
(124,	'CGV - Vincom Landmark 81',	'T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM',	'CGV'),
(125,	'CGV - Vincom Thủ Đức',	'Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức',	'CGV'),
(126,	'CGV - VivoCity',	'Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. 7',	'CGV'),
(127,	'CNS - Hai Bà Trưng',	'135 Hai Bà Trưng, Bến Nghé, Q.1',	'CineStar'),
(128,	'CNS - Quốc Thanh',	'271 Nguyễn Trãi, Q.1',	'CineStar'),
(129,	'GLX - Huỳnh Tấn Phát',	'1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7',	'Galaxy'),
(130,	'GLX - Kinh Dương Vương',	'718bis Kinh Dương Vương, Q.6',	'Galaxy'),
(131,	'GLX - Nguyễn Du',	'116 Nguyễn Du, Q.1',	'Galaxy'),
(132,	'GLX - Nguyễn Văn Quá',	'119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM',	'Galaxy'),
(133,	'GLX - Phạm Văn Chí',	'Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6',	'Galaxy'),
(134,	'GLX - Quang Trung',	'L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp',	'Galaxy'),
(135,	'GLX - Tân Bình',	'246 Nguyễn Hồng Đào, Tân Bình',	'CineStar'),
(136,	'GLX - Trung Chánh',	'TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12',	'CineStar'),
(137,	'Lotte - Cantavil',	'L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2',	'LotteCinima'),
(138,	'Lotte - Cộng Hòa',	'L4-Pico Plaza, 20 Cộng Hòa, Tân Bình',	'LotteCinima'),
(139,	'Lotte - Diamond',	'L13-Diamond Plaza, 34 Lê Duẩn, Q.1',	'LotteCinima'),
(140,	'Lotte - Gò Vấp',	'L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp',	'LotteCinima'),
(141,	'Lotte - Nam Sài Gòn',	'L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7',	'LotteCinima'),
(142,	'Lotte - Nowzone',	'L5-Nowzone, 235 Nguyễn Văn Cừ, Q.1',	'LotteCinima'),
(143,	'Lotte - Phú Thọ',	'L4-Lotte Mart Phú Thọ, Q.11',	'LotteCinima'),
(144,	'Lotte - Thủ Đức',	'L2-Joy Citipoint, KCX Linh Trung, Thủ Đức',	'LotteCinima'),
(145,	'MegaGS - Cao Thắng',	'19 Cao Thắng, Q.3',	'MegaGS');

DROP TABLE IF EXISTS `DatVe`;
CREATE TABLE `DatVe` (
  `tai_khoan` int NOT NULL,
  `ma_lich_chieu` int NOT NULL,
  `ma_ghe` int NOT NULL,
  PRIMARY KEY (`tai_khoan`,`ma_lich_chieu`,`ma_ghe`),
  KEY `ma_lich_chieu` (`ma_lich_chieu`),
  KEY `ma_ghe` (`ma_ghe`),
  CONSTRAINT `DatVe_ibfk_1` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung` (`tai_khoan`),
  CONSTRAINT `DatVe_ibfk_2` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu` (`ma_lich_chieu`),
  CONSTRAINT `DatVe_ibfk_3` FOREIGN KEY (`ma_ghe`) REFERENCES `Ghe` (`ma_ghe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `DatVe` (`tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(5003,	2001,	4000),
(5001,	2003,	4005),
(5001,	2004,	4001),
(5002,	2005,	4008),
(5000,	2006,	4002),
(5002,	2010,	4014),
(5002,	2011,	4003),
(5003,	2011,	4013),
(5004,	2014,	4009),
(5001,	2015,	4004),
(5001,	2017,	4010),
(5000,	2020,	4012),
(5000,	2023,	4006),
(5000,	2024,	4011),
(5004,	2028,	4007);

DROP TABLE IF EXISTS `Ghe`;
CREATE TABLE `Ghe` (
  `ma_ghe` int NOT NULL AUTO_INCREMENT,
  `ten_ghe` varchar(100) NOT NULL,
  `loai_ghe` varchar(100) NOT NULL,
  `ma_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_ghe`),
  KEY `ma_rap` (`ma_rap`),
  CONSTRAINT `Ghe_ibfk_1` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(4000,	'A1',	'ghethuong',	500),
(4001,	'A2',	'ghethuong',	500),
(4002,	'A3',	'ghethuong',	500),
(4003,	'A4',	'ghethuong',	500),
(4004,	'B1',	'ghethuong',	500),
(4005,	'B2',	'ghethuong',	500),
(4006,	'B3',	'ghethuong',	500),
(4007,	'B4',	'Gghethuong',	500),
(4008,	'C1',	'ghethuong',	500),
(4009,	'C2',	'ghethuong',	500),
(4010,	'C3',	'ghethuong',	500),
(4011,	'C4',	'ghethuong',	500),
(4012,	'D1',	'ghethuong',	500),
(4013,	'D2',	'ghethuong',	500),
(4014,	'D3',	'ghethuong',	500),
(4015,	'D4',	'ghethuong',	500),
(4016,	'A1',	'ghethuong',	501),
(4017,	'A2',	'ghethuong',	501),
(4018,	'A3',	'ghethuong',	501),
(4019,	'A4',	'ghethuong',	501),
(4020,	'B1',	'ghethuong',	501),
(4021,	'B2',	'ghethuong',	501),
(4022,	'B3',	'ghethuong',	501),
(4023,	'B4',	'ghethuong',	501),
(4024,	'C1',	'gheVip',	501),
(4025,	'C2',	'gheVip',	501),
(4026,	'C3',	'gheVip',	501),
(4027,	'C4',	'gheVip',	501),
(4028,	'D1',	'gheVip',	501),
(4029,	'D2',	'gheVip',	501),
(4030,	'D3',	'gheVip',	501),
(4031,	'D4',	'gheVip',	501);

DROP TABLE IF EXISTS `HeThongRap`;
CREATE TABLE `HeThongRap` (
  `ma_he_thong_rap` varchar(100) NOT NULL,
  `ten_he_thong_rap` varchar(150) NOT NULL,
  `bi_danh` varchar(100) DEFAULT NULL,
  `logo` varchar(150) NOT NULL,
  PRIMARY KEY (`ma_he_thong_rap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `bi_danh`, `logo`) VALUES
('BHDStar',	'BHD Star Cineplex',	'bhd-star-cineplex',	'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'),
('CGV',	'cgv',	'cgv',	'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png'),
('CineStar',	'CineStar',	'cinestar',	'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png'),
('Galaxy',	'Galaxy Cinema',	'galaxy-cinema',	'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png'),
('LotteCinima',	'Lotte Cinema',	'lotte-cinema',	'https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png'),
('MegaGS',	'MegaGS',	'megags',	'https://movienew.cybersoft.edu.vn/hinhanh/megags.png');

DROP TABLE IF EXISTS `LichChieu`;
CREATE TABLE `LichChieu` (
  `ma_lich_chieu` int NOT NULL AUTO_INCREMENT,
  `ma_phim` int DEFAULT NULL,
  `ma_rap` int DEFAULT NULL,
  `ngay_gio_chieu` datetime DEFAULT NULL,
  `gia_ve` int DEFAULT NULL,
  PRIMARY KEY (`ma_lich_chieu`),
  KEY `ma_phim` (`ma_phim`),
  KEY `ma_rap` (`ma_rap`),
  CONSTRAINT `LichChieu_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`),
  CONSTRAINT `LichChieu_ibfk_2` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_phim`, `ma_rap`, `ngay_gio_chieu`, `gia_ve`) VALUES
(2000,	10000,	500,	'2023-04-14 10:30:00',	85000),
(2001,	10000,	500,	'2023-04-14 13:30:00',	105000),
(2002,	10000,	501,	'2023-04-14 15:30:00',	95000),
(2003,	10000,	501,	'2023-04-14 18:30:00',	125000),
(2004,	10000,	502,	'2023-04-14 21:30:00',	85000),
(2005,	10001,	502,	'2023-04-14 11:30:00',	105000),
(2006,	10001,	503,	'2023-04-14 13:30:00',	95000),
(2007,	10001,	503,	'2023-04-14 15:30:00',	125000),
(2008,	10001,	504,	'2023-04-14 18:30:00',	85000),
(2009,	10001,	504,	'2023-04-14 21:30:00',	105000),
(2010,	10001,	505,	'2023-04-14 11:30:00',	95000),
(2011,	10001,	505,	'2023-04-14 13:30:00',	125000),
(2012,	10001,	506,	'2023-04-14 15:30:00',	85000),
(2013,	10001,	506,	'2023-04-14 18:30:00',	105000),
(2014,	10001,	507,	'2023-04-14 21:30:00',	95000),
(2015,	10002,	508,	'2023-04-14 11:30:00',	125000),
(2016,	10002,	508,	'2023-04-14 13:30:00',	85000),
(2017,	10002,	509,	'2023-04-14 15:30:00',	105000),
(2018,	10003,	509,	'2023-04-14 18:30:00',	95000),
(2019,	10003,	510,	'2023-04-14 21:30:00',	125000),
(2020,	10003,	511,	'2023-04-14 11:30:00',	85000),
(2021,	10003,	511,	'2023-04-14 13:30:00',	105000),
(2022,	10004,	512,	'2023-04-14 15:30:00',	95000),
(2023,	10004,	512,	'2023-04-14 18:30:00',	125000),
(2024,	10004,	513,	'2023-04-14 21:30:00',	85000),
(2025,	10004,	514,	'2023-04-14 11:30:00',	105000),
(2026,	10005,	514,	'2023-04-14 13:30:00',	95000),
(2027,	10005,	514,	'2023-04-14 15:30:00',	125000),
(2028,	10005,	514,	'2023-04-14 18:30:00',	85000);

DROP TABLE IF EXISTS `NguoiDung`;
CREATE TABLE `NguoiDung` (
  `tai_khoan` int NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `so_dt` varchar(50) NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `loai_nguoi_dung` varchar(50) DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT 'https://picsum.photos/200',
  PRIMARY KEY (`tai_khoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`, `anh_dai_dien`) VALUES
(5000,	'Trần Mỹ Phú An',	'ankakasi112@gmail.com',	'0364700478',	'1234',	'CLIENT',	'https://picsum.photos/200'),
(5001,	'Trần Anh Tú',	'ankakasi113@gmail.com',	'0364700478',	'$2b$10$IJ0e2r2b7OR0HQmAyR3ZEef.F1eAvpSD0MWQTnrTKpUhdZWNqVCl6',	'ADMIN',	'https://picsum.photos/200'),
(5002,	'Mỹ Phú AN',	'ankakasi115@gmail.com',	'0364700478',	'$2b$10$IJ0e2r2b7OR0HQmAyR3ZEef.F1eAvpSD0MWQTnrTKpUhdZWNqVCl6',	'ADMIN',	'https://picsum.photos/200'),
(5003,	'Nguyễn Lê Huy',	'ankakasi114@gmail.com',	'0364700478',	'$2b$10$IJ0e2r2b7OR0HQmAyR3ZEef.F1eAvpSD0MWQTnrTKpUhdZWNqVCl6',	'CLIENT',	'https://picsum.photos/200'),
(5004,	'Trần Văn Tin',	'ankakasi111@gmail.com',	'0364700478',	'$2b$10$IJ0e2r2b7OR0HQmAyR3ZEef.F1eAvpSD0MWQTnrTKpUhdZWNqVCl6',	'ADMIN',	'https://picsum.photos/200');

DROP TABLE IF EXISTS `Phim`;
CREATE TABLE `Phim` (
  `ma_phim` int NOT NULL AUTO_INCREMENT,
  `ten_phim` varchar(100) NOT NULL,
  `bi_danh` varchar(100) NOT NULL,
  `trailer` varchar(150) NOT NULL,
  `hinh_anh` varchar(150) NOT NULL,
  `mo_ta` text NOT NULL,
  `ma_nhom` varchar(1000) NOT NULL,
  `ngay_khoi_chieu` datetime DEFAULT NULL,
  `danh_gia` int DEFAULT NULL,
  `hot` tinyint(1) DEFAULT NULL,
  `dang_chieu` tinyint(1) DEFAULT NULL,
  `sap_chieu` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ma_phim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `bi_danh`, `trailer`, `hinh_anh`, `mo_ta`, `ma_nhom`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(10000,	'HOME ALONE',	'home-alone',	'https://www.youtube.com/watch?v=jEDaVHmw7r4',	'https://movienew.cybersoft.edu.vn/hinhanh/home-alone_gp01.jpg',	'alone',	'GP01',	'2023-04-14 00:00:00',	10,	1,	1,	1),
(10001,	'Chính diện của tra công 2',	'chinh-dien-cua-tra-cong-2',	'https://www.youtube.com/watch?v=IhJUtMe-SkY',	'https://movienew.cybersoft.edu.vn/hinhanh/high-low-the-worst-x-high-low-the-worst-x_gp01.jpg',	'Đẳng cấp đam mỹ 2024',	'GP02',	'2023-04-13 15:37:21',	10,	1,	1,	1),
(10002,	'Đàm phán 3',	'dam-phan-3',	'https://www.youtube.com/watch?v=EsnDIS0BGYg',	'https://movienew.cybersoft.edu.vn/hinhanh/dam-phan_gp01.jpg',	'Nội dung phim dựa trên khủng hoảng con tin Hàn Quốc có thật năm 2007 tại Afghanistan khi những người Hàn Quốc bị Taliban bắt làm con tin và sẽ bị chúng xử tử để đạt mục đích. Nhà đàm phán kỳ cựu Jae-ho (Hwang Jung-min) được Hàn Quốc và chính phủ cử đi để giải cứu những con tin và xử lý một trong những sự cố chính trị lớn nhất lịch sử quốc gia. Khi đến nơi, Jae-ho yêu cầu sự hợp tác từ chính phủ Afghanistan',	'GP02',	'2023-03-13 16:05:23',	5,	1,	0,	1),
(10003,	'Demon Slayer',	'demon-slayer',	'https://youtu.be/a9tq0aS5Zu8',	'https://movienew.cybersoft.edu.vn/hinhanh/demon-slayer_gp02.jpg',	'A new mission is about to begin within the Swordsmith Village!',	'GP02',	'2023-03-22 00:00:00',	5,	1,	0,	1),
(10004,	'Chiến Binh Ong: Thế Giới Lượng Tử!',	'chien-binh-ong-the-gioi-luong-tu',	'https://www.youtube.com/embed/r_X6ixZa4Wg',	'https://movienew.cybersoft.edu.vn/hinhanh/nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu_gp03.jpg',	'Scott Lang và Hope Van Dyne trở lại tiếp tục cuộc phiêu lưu của họ với vai trò Người Kiến và Chiến binh Ong. Cùng với cha mẹ của Hope, họ sẽ có chuyến khám phá Lượng Tử Giới, gặp gỡ những sinh vật mới lạ và bắt đầu cuộc hành trình vào thế giới lượng tử.',	'GP03',	'2023-02-25 00:00:00',	10,	1,	0,	0),
(10005,	'Mèo Đi Hia: Điều Ước Cuối Cùng!',	'meo-di-hia-dieu-uoc-cuoi-cung',	'https://www.youtube.com/embed/BsmTzEdX17U',	'https://movienew.cybersoft.edu.vn/hinhanh/meo-di-hia-dieu-uoc-cuoi-cung_gp03.jpg',	'Puss phát hiện ra rằng niềm đam mê phiêu lưu mạo hiểm của anh đã gây ra hậu quả: Anh đã đốt cháy 8 trong số 9 mạng sống của mình, bây giờ chỉ còn lại đúng một mạng. Anh ta bắt đầu một cuộc hành trình để tìm Điều ước cuối cùng thần thoại trong Rừng Đen nhằm khôi phục lại chín mạng sống của mình. Chỉ còn một mạng sống, đây có lẽ sẽ là cuộc hành trình nguy hiểm nhất của Puss.',	'GP03',	'2022-12-30 00:00:00',	10,	1,	1,	0),
(10006,	'TOM & JERRY: QUẬY TUNG NEW YORK',	'tom-jerry-quay-tung-new-york',	'https://www.youtube.com/watch?v=1ue84WhBdK4',	'https://movienew.cybersoft.edu.vn/hinhanh/tom-jerry-quay-tung-new-york_gp03.jpg',	'Sau nhiều năm chành chọe, nay cặp kỳ phùng địch thủ nổi tiếng nhất thế giới Tom và Jerry đã làm hòa, khăn gói rời khỏi mái nhà chung, và bắt đầu hành trình của riêng mình. Chuột Jerry nay trú ngụ tại một khách sạn sang trọng, nơi chuẩn bị tổ chức một đám cưới Thế kỷ. Cô nhân viên mới Kayla được giao cho nhiệm vụ đuổi Jerry đi nên mang về một chàng mèo “mình đầy kinh nghiệm” đối phó với chuột, không ai khác chính là Tom. Và thế là cuộc chiến mèo - chuột lại nổ ra, kéo theo loạt rắc rối cho khách sạn, và biết bao tình huống dở khóc dở cười.',	'GP03',	'2023-03-10 00:00:00',	10,	0,	0,	1),
(10007,	'SIÊU LỪA GẶP SIÊU LẦY',	'sieu-lua-gap-sieu-lay',	'https://www.youtube.com/watch?v=kdn0xrDf8tY',	'https://movienew.cybersoft.edu.vn/hinhanh/sieu-lua-gap-sieu-lay_gp03.jpg',	'Thuộc phong cách hành động – hài hước với các “cú lừa” thông minh và lầy lội đến từ bộ đôi Tú (Anh Tú) và Khoa (Mạc Văn Khoa), Siêu Lừa Gặp Siêu Lầy của đạo diễn Võ Thanh Hòa theo chân của Khoa – tên lừa đảo tầm cỡ “quốc nội” đến đảo ngọc Phú Quốc với mong muốn đổi đời. Tại đây, Khoa gặp Tú – tay lừa đảo “hàng real” và cùng Tú thực hiện các phi vụ từ nhỏ đến lớn. Cứ ngỡ sự ranh mãnh của Tú và sự may mắn trời cho của Khoa sẽ giúp họ trở thành bộ đôi bất khả chiến bại, nào ngờ lại đối mặt với nhiều tình huống dở khóc – dở cười. Nhất là khi băng nhóm của bộ đôi nhanh chóng mở rộng vì sự góp mặt của ông Năm (Nhất Trung) và bé Mã Lai (Ngọc Phước).',	'GP03',	'2023-03-01 00:00:00',	10,	0,	0,	0),
(10008,	'SHAZAM! CƠN THỊNH NỘ CỦA CÁC VỊ THẦN',	'shazam-con-thinh-no-cua-cac-vi-than',	'https://www.youtube.com/watch?v=lPmzBaNJUzI',	'https://movienew.cybersoft.edu.vn/hinhanh/shazam-con-thinh-no-cua-cac-vi-than_gp03.jpg',	'Một tác phẩm từ New Line Cinema mang tên “Shazam! Fury of the Gods,” tiếp tục câu chuyện về chàng trai Billy Batson, và bản ngã Siêu anh hùng trưởng thành của mình sau khi hô cụm từ “SHAZAM !,” ma thuật.',	'GP03',	'2023-03-17 00:00:00',	10,	0,	0,	1),
(10009,	'VỆ BINH DẢI NGÂN HÀ 3',	've-binh-dai-ngan-ha-3',	'https://www.youtube.com/watch?v=O402pXqj79c',	'https://movienew.cybersoft.edu.vn/hinhanh/ve-binh-dai-ngan-ha-3_gp03.jpg',	'Cho dù vũ trụ này có bao la đến đâu, các Vệ Binh của chúng ta cũng không thể trốn chạy mãi mãi. Vệ Binh Dải Ngân Hà 3 dự kiến khởi chiếu tại rạp từ 05.05.2023.',	'GP03',	'2023-05-05 00:00:00',	10,	1,	0,	1),
(10010,	'PHI VỤ ĐÀO MỎ',	'phi-vu-dao-mo',	'https://www.youtube.com/watch?v=xW7yITd214Y',	'https://movienew.cybersoft.edu.vn/hinhanh/phi-vu-dao-mo_gp03.jpg',	'Jason và mẹ của anh ấy kiếm tiền ở Khu Phố Tàu bằng cách lừa tiền mọi người. Họ quyết định thực hiện một phi vụ lớn cuối cùng trước khi hoàn lương bằng cách cho Jason giả làm cháu trai của một phú bà giàu có, nhằm chiếm đoạt gia sản. Tuy nhiên, Jason bắt đầu cảm nhận được sự ấm áp khi trở thành thành viên của một gia đình mà trước đây anh chưa từng cảm nhận được. Điều này đã ảnh hưởng rất nhiều đến kế hoạch của nhóm. Vỏ bọc của họ sắp bị vạch trần, nhưng bằng cách nào đó, sự thật về bí ẩn gia đình của Jason đã được tiết lộ..',	'GP03',	'2023-03-03 00:00:00',	7,	1,	0,	1),
(10011,	'High and Low : The Worst X',	'high-and-low-the-worst-x',	'https://www.youtube.com/watch?v=IhJUtMe-SkY',	'https://movienew.cybersoft.edu.vn/hinhanh/high-low-the-worst-x_gp03.jpg',	'The film is set 3 years after the events of \'High and Low: The Worst\' which follows the rivalry between Oya High\'s street fighters and delinquents of Housen Academy.',	'GP03',	'2023-03-04 04:04:55',	10,	1,	1,	0),
(10012,	'Sát thủ nhân tạo',	'sat-thu-nhan-tao',	'https://www.youtube.com/watch?v=X8s2zX1gOHk',	'https://movienew.cybersoft.edu.vn/hinhanh/sat-thu-nhan-tao_gp03.jpg',	'Đây một bộ phim kể lại một nhà nghiên cứu đào tạo ra sát thủ chuyên nghiệp đi làm nhiệm vụ',	'GP03',	'2023-03-16 00:00:00',	7,	1,	1,	0),
(10013,	'Khóa chặt cửa nào Suzume',	'khoa-chat-cua-nao-suzume',	'https://www.youtube.com/watch?v=6R6q2fAp2n4',	'https://movienew.cybersoft.edu.vn/hinhanh/khoa-chat-cua-nao-suzume_gp03.jpg',	'17-year-old Suzume\'s journey begins in a quiet town in Kyushu when she encounters a young man who tells her, “I\'m looking for a door.” What Suzume finds is a single weathered door standing upright in the midst of ruins as though it was shielded from whatever catastrophe struck. Seemingly mesmerized by its power, Suzume reaches for the knob',	'GP03',	'2023-04-18 00:00:00',	8,	1,	1,	0),
(10014,	'Trái Ớt Ngọt Ngào',	'trai-ot-ngot-ngao',	'https://www.youtube.com/watch?v=Z1BCujX3pw8',	'https://movienew.cybersoft.edu.vn/hinhanh/captain-marvel-1_gp01.jpeg',	'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',	'GP03',	'2023-03-16 00:00:00',	5,	1,	0,	1),
(10015,	'Hạnh Phúc Máu 3',	'hanh-phuc-mau-3',	'https://www.youtube.com/watch?v=X8s2zX1gOHk',	'https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mau-3_gp03.jpg',	'Đây một bộ phim kể lại một nhà nghiên cứu đào tạo ra sát thủ chuyên nghiệp đi làm nhiệm vụ',	'GP03',	'2023-03-23 00:00:00',	10,	1,	1,	0),
(10016,	'Ta làm lớn ở hậu cung',	'ta-lam-lon-o-hau-cung',	'https://www.youtube.com/watch?v=a_SUJa6hOqM',	'https://movienew.cybersoft.edu.vn/hinhanh/ta-lam-lon-o-hau-cung_gp01.jpeg',	'Xuyên không trở thành thiên hạ đệ nhất',	'GP03',	'2023-03-01 00:00:00',	5,	0,	1,	0),
(10017,	'Tokyo Gâu',	'tokyo-gau',	'https://www.youtube.com/watch?v=ROy57arUE1s',	'https://movienew.cybersoft.edu.vn/hinhanh/tokyo-gau_gp03.jpeg',	'keneki-kun hô si khe te dồ sí khe te dồ sô nồ sồ cuu mi quà, ta không sai thứ sai chính là thế giới này',	'GP03',	'2023-03-15 00:00:00',	4,	0,	1,	0),
(10018,	'Pháp sư mù',	'phap-su-mu',	'https://www.youtube.com/watch?v=Z1BCujX3pw8',	'https://movienew.cybersoft.edu.vn/hinhanh/phap-su-mu_gp03.jpeg',	'Pháp sư đã tồn tại từ rất lâu đời',	'GP03',	'2023-03-15 00:00:00',	10,	1,	0,	1),
(10019,	'Ta xuyên không vô tình có được hệ thống',	'ta-xuyen-khong-vo-tinh-co-duoc-he-thong',	'https://www.youtube.com/watch?v=Z1BCujX3pw8',	'https://movienew.cybersoft.edu.vn/hinhanh/ta-xuyen-khong-vo-tinh-co-duoc-he-thong_gp03.jpeg',	'Hệ thống tranh đoạt, mua nhẫn trữ vật từ cửa hàng vật phẩm',	'GP03',	'2023-03-15 00:00:00',	8,	1,	1,	0),
(10020,	'Main Sở Hữu Đôi Mắt Của Thần Thao Túng Thời Không',	'main-so-huu-doi-mat-cua-than-thao-tung-thoi-khong',	'https://www.youtube.com/watch?v=gW3EX4hk5Sk&t=662s',	'https://movienew.cybersoft.edu.vn/hinhanh/main-so-huu-doi-mat-cua-than-thao-tung-thoi-khong_gp03.jpg',	'Main Sở Hữu Đôi Mắt Của Thần Thao Túng Thời Không | Review Phim Anime Hay | Gấu Xàm\r\nReview phim anime hay , tóm tắt anime\r\nAnime : Summer Time Render\r\nThể loại viễn tưởng ,hành động chiến đấu hay...',	'GP03',	'2023-03-17 00:00:00',	9,	1,	0,	1),
(10021,	'PHIM TEST',	'phim-test',	'https://www.youtube.com/watch?v=KjY94sAKLlw',	'https://movienew.cybersoft.edu.vn/hinhanh/phim-test_gp03.jpg',	'dsad asd sadsa sa',	'GP03',	'2023-04-13 15:37:21',	10,	1,	1,	1),
(10022,	'Raya và rồng thần cuối cùng',	'raya-va-rong-than-cuoi-cung',	'https://www.youtube.com/watch?v=p1kgwxcCslY&feature=youtu.be',	'https://movienew.cybersoft.edu.vn/hinhanh/raya-va-rong-than-cuoi-cung_gp03.jpg',	'Từ vương quốc Kumandra, một nữ chiến binh đơn độc đã hợp tác cùng 1 nhóm lạc quẻ trong thử thách tìm kiếm con rồng cuối cùng, tạo ra sự đoàn kết và mang ánh sáng đến vương quốc của họ 1 lần nữa.',	'GP03',	'2023-03-15 00:00:00',	10,	1,	1,	1),
(10023,	'Biệt đội rất ổn',	'biet-doi-rat-on',	'https://www.youtube.com/watch?v=dQzX_9O7Rvw',	'https://movienew.cybersoft.edu.vn/hinhanh/biet-doi-rat-on_gp03.jpg',	'Câu chuyện chuyển từ kịch bản phim chiếu mạng (web drama) lên phim điện ảnh chiếu rạp đã xuất hiện cách đây khoảng 5 năm. Chị mười ba (phiên bản điện ảnh của web drama Thập tam muội) của diễn viên hài Thu Trang có thể nói là tác phẩm đánh dấu cột mốc thành công trong xu hướng này. Tiếp theo phải kể đến Bố già của Trấn Thành hay Pháp sư mù của Huỳnh Lập. Tuy nhiên, sau những tác phẩm nói trên, giới chuyên môn hay khán giả vẫn khó để tìm những phim gây tiếng vang ở hai phiên bản chiếu mạng và điện ảnh.',	'GP03',	'2023-04-08 00:00:00',	6,	1,	1,	1),
(10024,	'Join Wick 6',	'join-wick-6',	'https://www.youtube.com/watch?v=yjRHZEUamCc',	'https://movienew.cybersoft.edu.vn/hinhanh/join-wick-4_gp03.jpg',	'sdrdgfgsfg',	'GP03',	'2023-04-13 15:37:21',	8,	1,	1,	0),
(10025,	'Cuộc phiêu lưu của Chingerror',	'cuoc-phieu-luu-cua-chingerror',	'https://www.youtube.com/watch?v=BHcqT1QhCg0',	'https://movienew.cybersoft.edu.vn/hinhanh/cuoc-phieu-luu-cua-chingerror_gp03.png',	'Ching solo vs Quỷ',	'GP03',	'2023-04-08 00:00:00',	0,	1,	1,	0),
(10026,	'Hung va ae',	'hung-va-ae',	'https://www.youtube.com/watch?v=fLHejDNA_CM',	'https://movienew.cybersoft.edu.vn/hinhanh/hung-va-ae_gp03.png',	'hay vcl 123455667778',	'GP03',	'2023-04-10 00:00:00',	10,	1,	1,	0),
(10027,	'duyen 500k',	'duyen-500k',	'https://www.youtube.com/watch?v=yjRHZEUamCc',	'https://movienew.cybersoft.edu.vn/hinhanh/duyen-500k_gp03.jpg',	'500k 1 dem',	'GP03',	'2023-04-13 00:00:00',	0,	1,	0,	1),
(10028,	'',	'',	'',	'',	'',	'',	'2023-04-13 15:37:21',	10,	1,	1,	1);

DROP TABLE IF EXISTS `RapPhim`;
CREATE TABLE `RapPhim` (
  `ma_rap` int NOT NULL AUTO_INCREMENT,
  `ten_rap` varchar(100) NOT NULL,
  `ma_cum_rap` int DEFAULT NULL,
  PRIMARY KEY (`ma_rap`),
  KEY `ma_cum_rap` (`ma_cum_rap`),
  CONSTRAINT `RapPhim_ibfk_1` FOREIGN KEY (`ma_cum_rap`) REFERENCES `CumRap` (`ma_cum_rap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(500,	'Rạp 1',	101),
(501,	'Rạp 2',	101),
(502,	'Rạp 3',	102),
(503,	'Rạp 4',	102),
(504,	'Rạp 5',	103),
(505,	'Rạp 6',	103),
(506,	'Rạp 7',	104),
(507,	'Rạp 8',	104),
(508,	'Rạp 9',	105),
(509,	'Rạp 10',	105),
(510,	'Rạp 11',	106),
(511,	'Rạp 12',	106),
(512,	'Rạp 13',	107),
(513,	'Rạp 14',	107),
(514,	'Rạp 15',	108),
(515,	'Rạp 16',	108),
(516,	'Rạp 17',	109),
(517,	'Rạp 18',	109),
(518,	'Rạp 19',	110),
(519,	'Rạp 20',	110),
(520,	'Rạp 21',	111),
(521,	'Rạp 22',	111),
(522,	'Rạp 23',	112),
(523,	'Rạp 24',	112),
(524,	'Rạp 25',	113),
(525,	'Rạp 26',	113),
(526,	'Rạp 27',	114),
(527,	'Rạp 28',	114),
(528,	'Rạp 29',	115),
(529,	'Rạp 30',	115);

-- 2023-04-19 07:58:02
