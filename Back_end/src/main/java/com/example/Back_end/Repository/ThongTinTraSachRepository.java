package com.example.Back_end.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Back_end.Model.ThongTinTraSach;

@Repository
public interface ThongTinTraSachRepository extends JpaRepository<ThongTinTraSach, Integer> {
   
    List<ThongTinTraSach> findByTenThanhVienContainingIgnoreCase(String tenThanhVien);
}

