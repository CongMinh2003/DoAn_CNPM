package com.example.Back_end.Service;

import com.example.Back_end.Model.ThanhVienTV;
import com.example.Back_end.Repository.ThanhVienTVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThanhVienTVService {

    @Autowired
    private ThanhVienTVRepository thanhVienTVRepository;

    public ThanhVienTV registerMember(ThanhVienTV member) {
        return thanhVienTVRepository.save(member); 
    }
}
