package com.example.Back_end.Repository;

import com.example.Back_end.Model.Sach;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SachRepository extends JpaRepository<Sach, Integer> {

    boolean existsByTenSach(String tenSach);
    
    List<Sach> findByTenSachContainingIgnoreCase(String name);
    
    List<Sach> findByTenSach(String tenSach);

}
