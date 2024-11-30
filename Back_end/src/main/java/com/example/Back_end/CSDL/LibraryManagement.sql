
CREATE DATABASE LibraryManagement;
USE LibraryManagement;

CREATE TABLE TaiKhoan (
    taiKhoanId INT PRIMARY KEY IDENTITY(1,1),
    tenTK VARCHAR(50) NOT NULL UNIQUE,
    matKhau VARCHAR(255) NOT NULL
);

CREATE TABLE Sach (
    sachId INT PRIMARY KEY IDENTITY(1,1),
    tenSach NVARCHAR(255) NOT NULL,
    tacGia NVARCHAR(100),
    namXuatBan INT,
    theLoai NVARCHAR(50),
    soLuong INT DEFAULT 0
);

INSERT INTO Sach (tenSach, tacGia, namXuatBan, theLoai, soLuong) VALUES
(N'Lập Trình Java', N'Nguyen Minh Tu', 2020, N'Công nghệ', 10),
(N'Học Máy', N'Pham Quoc Duy', 2021, N'Khoa học', 5),
(N'Cấu Trúc Dữ Liệu và Giải Thuật', N'Nguyen Thi Lan', 2019, N'Công nghệ', 8),
(N'Lập Trình Web với Angular', N'Tran Minh Tu', 2022, N'Công nghệ', 12),
(N'Python Cơ Bản', N'Le Thi Bao', 2021, N'Khoa học', 15),
(N'Lập Trình C++', N'Do Thi Minh', 2018, N'Công nghệ', 6),
(N'Điện Tử Cơ Bản', N'Bui Thanh Son', 2017, N'Kỹ thuật', 20),
(N'Lập Trình Ứng Dụng Di Động', N'Truong Thi Kim', 2023, N'Công nghệ', 4),
(N'Chế Tạo Robot', N'Nguyen Thi Bao', 2022, N'Kỹ thuật', 7),
(N'Xử Lý Hình Ảnh với OpenCV', N'Pham Thi Bich', 2020, N'Khoa học', 9);


SELECT * FROM Sach;

CREATE TABLE ThanhVienTV (
    thanhVienId INT PRIMARY KEY IDENTITY(1,1),
    tenThanhVien NVARCHAR(100) NOT NULL,
    diaChi NVARCHAR(255),
    email VARCHAR(100) UNIQUE
);

INSERT INTO ThanhVienTV (tenThanhVien, diaChi, email) VALUES
(N'Nguyen Thi Lan', N'123 Le Loi, Quang Nam', 'lan.nguyen@example.com'),
(N'Tran Minh Tu', N'456 Hai Ba Trung, Da Nang', 'tu.tran@example.com'),
(N'Pham Quoc Duy', N'789 Tran Hung Dao, Hue', 'duy.pham@example.com'),
(N'Le Thi Lan', N'101 Mai Chi Tho, HCM', 'lan.le@example.com'),
(N'Nguyen Thi Bao', N'102 Nguyen Du, Hanoi', 'bao.nguyen@example.com'),
(N'Bui Thanh Son', N'103 Hoang Hoa Tham, Ha Noi', 'son.bui@example.com'),
(N'Do Thi Minh', N'104 Quang Trung, Da Nang', 'minh.do@example.com'),
(N'Truong Thi Kim', N'105 Nguyen Thi Minh Khai, HCM', 'kim.truong@example.com'),
(N'Nguyen Thi Mai', N'106 Le Thanh Ton, Hai Phong', 'mai.nguyen@example.com'),
(N'Pham Thi Bich', N'107 Tan Son Nhat, HCM', 'bich.pham@example.com');


CREATE TABLE ThongTinMuonSach (
    muonId INT PRIMARY KEY IDENTITY(1,1),
    thanhVienId INT,
    tenThanhVien NVARCHAR(100) NOT NULL,  
    sachId INT,
    ngayMuon DATE DEFAULT GETDATE(),
    ngayTraDuKien DATE,
    FOREIGN KEY (thanhVienId) REFERENCES ThanhVienTV(thanhVienId) ON DELETE CASCADE,
    FOREIGN KEY (sachId) REFERENCES Sach(sachId) ON DELETE CASCADE
);

CREATE TABLE ThongTinTraSach (
    traID INT PRIMARY KEY IDENTITY(1,1),
    muonId INT,
    tenThanhVien NVARCHAR(100) NOT NULL,  
    ngayTra DATE DEFAULT GETDATE(),
    tinhTrangSach NVARCHAR(255),
    FOREIGN KEY (muonId) REFERENCES ThongTinMuonSach(muonId) ON DELETE CASCADE
);

CREATE TABLE BaoCao (
    baoCaoId INT PRIMARY KEY IDENTITY(1,1),
    thanhVienId INT,
    ngayBaoCao DATE DEFAULT GETDATE(),
    noiDung TEXT,
    FOREIGN KEY (thanhVienId) REFERENCES ThanhVienTV(thanhVienId) ON DELETE CASCADE
);	

SELECT * FROM TaiKhoan;
SELECT * FROM Sach;
SELECT * FROM ThanhVienTV;
SELECT * FROM ThongTinMuonSach;
SELECT * FROM ThongTinTraSach;
SELECT * FROM BaoCao;


INSERT INTO TaiKhoan (tenTK, matKhau) VALUES ('CongMinh', '2003');
INSERT INTO TaiKhoan (tenTK, matKhau) VALUES ('CongMinh123', '2003');

DROP TABLE Sach;

Delete from ThanhVienTV;
Delete from Sach;
