package com.example.Back_end.Repository;

import com.example.Back_end.Model.BaoCao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaoCaoRepository extends JpaRepository<BaoCao, Integer> {
}
