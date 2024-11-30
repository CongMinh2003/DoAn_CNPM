package com.example.Back_end.Service;

import com.example.Back_end.Model.BaoCao;
import com.example.Back_end.Repository.BaoCaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BaoCaoService {

    @Autowired
    private BaoCaoRepository baoCaoRepository;

    public void saveBaoCao(BaoCao baoCao) {
        baoCaoRepository.save(baoCao);
    }
}
