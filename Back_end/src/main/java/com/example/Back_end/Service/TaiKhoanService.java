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
        System.out.println("TaiKhoan: " + taiKhoan.getTenTK());
        {
            System.out.println("Mat khau tu DB: " + taiKhoan.getMatKhau());
            return taiKhoan.getMatKhau().equals(matKhau);
        }
    } // return false;
    
    public boolean checkAccountExists(String tenTK) {
        TaiKhoan taiKhoan = taiKhoanRepository.findByTenTK(tenTK);
        return taiKhoan != null;
    }

    public void saveTaiKhoan(TaiKhoan taiKhoan) {
        taiKhoanRepository.save(taiKhoan);
    }

}
