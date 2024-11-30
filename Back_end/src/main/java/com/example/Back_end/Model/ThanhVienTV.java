package com.example.Back_end.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "ThanhVienTV")
public class ThanhVienTV {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "thanhVienId")
    private Integer thanhVienId;

    @Column(name = "tenThanhVien", nullable = false)
    private String tenThanhVien;

    @Column(name = "diaChi")
    private String diaChi;

    @Column(name = "email", unique = true)
    private String email;

    public ThanhVienTV() {}

    public ThanhVienTV(String tenThanhVien, String diaChi, String email) {
        this.tenThanhVien = tenThanhVien;
        this.diaChi = diaChi;
        this.email = email;
    }

    public Integer getThanhVienId() {
        return thanhVienId;
    }

    public void setThanhVienId(Integer thanhVienId) {
        this.thanhVienId = thanhVienId;
    }

    public String getTenThanhVien() {
        return tenThanhVien;
    }

    public void setTenThanhVien(String tenThanhVien) {
        this.tenThanhVien = tenThanhVien;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

