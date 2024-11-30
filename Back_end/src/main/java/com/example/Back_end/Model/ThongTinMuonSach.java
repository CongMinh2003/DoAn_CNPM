package com.example.Back_end.Model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ThongTinMuonSach")
public class ThongTinMuonSach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "muonId")
    private Integer muonId;

    @Column(name = "thanhVienId")
    private Integer thanhVienId;

    @Column(name = "tenThanhVien", nullable = false)
    private String tenThanhVien;

    @Column(name = "sachId")
    private Integer sachId;

    @Column(name = "ngayMuon")
    @Temporal(TemporalType.DATE)
    private Date ngayMuon;

    @Column(name = "ngayTraDuKien")
    @Temporal(TemporalType.DATE)
    private Date ngayTraDuKien;


    public ThongTinMuonSach() {}

    public ThongTinMuonSach(Integer thanhVienId, String tenThanhVien, Integer sachId, Date ngayMuon, Date ngayTraDuKien) {
        this.thanhVienId = thanhVienId;
        this.tenThanhVien = tenThanhVien;
        this.sachId = sachId;
        this.ngayMuon = ngayMuon;
        this.ngayTraDuKien = ngayTraDuKien;
    }

    public Integer getMuonId() {
        return muonId;
    }

    public void setMuonId(Integer muonId) {
        this.muonId = muonId;
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

    public Integer getSachId() {
        return sachId;
    }

    public void setSachId(Integer sachId) {
        this.sachId = sachId;
    }

    public Date getNgayMuon() {
        return ngayMuon;
    }

    public void setNgayMuon(Date ngayMuon) {
        this.ngayMuon = ngayMuon;
    }

    public Date getNgayTraDuKien() {
        return ngayTraDuKien;
    }

    public void setNgayTraDuKien(Date ngayTraDuKien) {
        this.ngayTraDuKien = ngayTraDuKien;
    }
}

