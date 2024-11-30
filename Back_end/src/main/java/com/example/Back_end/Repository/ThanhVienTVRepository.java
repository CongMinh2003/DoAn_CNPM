package com.example.Back_end.Repository;

import com.example.Back_end.Model.ThanhVienTV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThanhVienTVRepository extends JpaRepository<ThanhVienTV, Integer> {
    ThanhVienTV findByEmail(String email);
}
