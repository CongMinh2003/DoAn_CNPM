package com.example.Back_end.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Sach")
public class Sach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sachId")
    private Integer sachId;

    @Column(name = "tenSach", nullable = false)
    private String tenSach;

    @Column(name = "tacGia")
    private String tacGia;

    @Column(name = "namXuatBan")
    private Integer namXuatBan;

    @Column(name = "theLoai")
    private String theLoai;

    @Column(name = "soLuong", nullable = false)
    private Integer soLuong;

    public Sach() {}

    public Sach(String tenSach, String tacGia, Integer namXuatBan, String theLoai, Integer soLuong) {
        this.tenSach = tenSach;
        this.tacGia = tacGia;
        this.namXuatBan = namXuatBan;
        this.theLoai = theLoai;
        this.soLuong = soLuong;
    }

    public Integer getSachId() {
        return sachId;
    }

    public void setSachId(Integer sachId) {
        this.sachId = sachId;
    }

    public String getTenSach() {
        return tenSach;
    }

    public void setTenSach(String tenSach) {
        this.tenSach = tenSach;
    }

    public String getTacGia() {
        return tacGia;
    }

    public void setTacGia(String tacGia) {
        this.tacGia = tacGia;
    }

    public Integer getNamXuatBan() {
        return namXuatBan;
    }

    public void setNamXuatBan(Integer namXuatBan) {
        this.namXuatBan = namXuatBan;
    }

    public String getTheLoai() {
        return theLoai;
    }

    public void setTheLoai(String theLoai) {
        this.theLoai = theLoai;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }
}

