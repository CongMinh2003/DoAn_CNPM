package com.example.Back_end.Model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BaoCao")
public class BaoCao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "baoCaoId")
    private Integer baoCaoId;

    @Column(name = "thanhVienId")
    private Integer thanhVienId;

    @Column(name = "ngayBaoCao")
    @Temporal(TemporalType.DATE)
    private Date ngayBaoCao;

    @Column(name = "noiDung")
    private String noiDung;

    public BaoCao() {}

    public BaoCao(Integer thanhVienId, Date ngayBaoCao, String noiDung) {
        this.thanhVienId = thanhVienId;
        this.ngayBaoCao = ngayBaoCao;
        this.noiDung = noiDung;
    }

    public Integer getBaoCaoId() {
        return baoCaoId;
    }

    public void setBaoCaoId(Integer baoCaoId) {
        this.baoCaoId = baoCaoId;
    }

    public Integer getThanhVienId() {
        return thanhVienId;
    }

    public void setThanhVienId(Integer thanhVienId) {
        this.thanhVienId = thanhVienId;
    }

    public Date getNgayBaoCao() {
        return ngayBaoCao;
    }

    public void setNgayBaoCao(Date ngayBaoCao) {
        this.ngayBaoCao = ngayBaoCao;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }
}
