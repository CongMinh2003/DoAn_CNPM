package com.example.Back_end.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.Back_end.Model.ThongTinMuonSach;

@Repository
public interface ThongTinMuonSachRepository extends JpaRepository<ThongTinMuonSach, Integer> {
    List<ThongTinMuonSach> findByTenThanhVienContainingIgnoreCase(String tenThanhVien);
}
