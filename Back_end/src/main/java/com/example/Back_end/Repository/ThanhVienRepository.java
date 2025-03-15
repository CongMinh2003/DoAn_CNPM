package com.example.Back_end.Repository;

import com.example.Back_end.Model.ThanhVienTV;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThanhVienRepository extends JpaRepository<ThanhVienTV, Integer> {
    List<ThanhVienTV> findByTenThanhVienContainingIgnoreCase(String name);
    Optional<ThanhVienTV> findByTenThanhVien(String tenThanhVien);
}
