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

    @Column(name = "tieuDeBaoCao", nullable = false, length = 100)
    private String tieuDeBaoCao;

    @Column(name = "ngayBaoCao")
    @Temporal(TemporalType.DATE)
    private Date ngayBaoCao;

    @Column(name = "noiDung", columnDefinition = "TEXT")
    private String noiDung;

    public BaoCao() {}

    public BaoCao(String tieuDeBaoCao, Date ngayBaoCao, String noiDung) {
        this.tieuDeBaoCao = tieuDeBaoCao;
        this.ngayBaoCao = ngayBaoCao;
        this.noiDung = noiDung;
    }

    public Integer getBaoCaoId() {
        return baoCaoId;
    }

    public void setBaoCaoId(Integer baoCaoId) {
        this.baoCaoId = baoCaoId;
    }

    public String getTieuDeBaoCao() {
        return tieuDeBaoCao;
    }

    public void setTieuDeBaoCao(String tieuDeBaoCao) {
        this.tieuDeBaoCao = tieuDeBaoCao;
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
