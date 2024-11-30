package com.example.Back_end.Model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ThongTinTraSach")
public class ThongTinTraSach {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "traID")
    private Integer traID;

    @Column(name = "muonId")
    private Integer muonId;

    @Column(name = "tenThanhVien", nullable = false)
    private String tenThanhVien;

    @Column(name = "ngayTra")
    @Temporal(TemporalType.DATE)
    private Date ngayTra;

    @Column(name = "tinhTrangSach")
    private String tinhTrangSach;

    public ThongTinTraSach() {}

    public ThongTinTraSach(Integer muonId, String tenThanhVien, Date ngayTra, String tinhTrangSach) {
        this.muonId = muonId;
        this.tenThanhVien = tenThanhVien;
        this.ngayTra = ngayTra;
        this.tinhTrangSach = tinhTrangSach;
    }

    public Integer getTraID() {
        return traID;
    }

    public void setTraID(Integer traID) {
        this.traID = traID;
    }

    public Integer getMuonId() {
        return muonId;
    }

    public void setMuonId(Integer muonId) {
        this.muonId = muonId;
    }

    public String getTenThanhVien() {
        return tenThanhVien;
    }

    public void setTenThanhVien(String tenThanhVien) {
        this.tenThanhVien = tenThanhVien;
    }

    public Date getNgayTra() {
        return ngayTra;
    }

    public void setNgayTra(Date ngayTra) {
        this.ngayTra = ngayTra;
    }

    public String getTinhTrangSach() {
        return tinhTrangSach;
    }

    public void setTinhTrangSach(String tinhTrangSach) {
        this.tinhTrangSach = tinhTrangSach;
    }
}

