package com.example.Back_end.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Back_end.Model.TaiKhoan;
import com.example.Back_end.Repository.TaiKhoanRepository;

@Service
public class TaiKhoanService {
     @Autowired
    private TaiKhoanRepository taiKhoanRepository;

    public boolean authenticate(String tenTK, String matKhau) {
        TaiKhoan taiKhoan = taiKhoanRepository.findByTenTK(tenTK);
        if (taiKhoan == null) {
            return false;
        }
            return taiKhoan.getMatKhau().equals(matKhau);
    } 
}
