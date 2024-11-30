package com.example.Back_end.Service;

import com.example.Back_end.Model.Sach;
import com.example.Back_end.Repository.SachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SachService {

    @Autowired
    private SachRepository sachRepository;

    public List<Sach> getAllSach() {
        return sachRepository.findAll();
    }

    public List<Sach> searchBooksByName(String name) {
        return sachRepository.findByTenSachContainingIgnoreCase(name);
    }

    public Sach saveSach(Sach sach) {
        return sachRepository.save(sach);
    }

    //check tên sách đã có hay chưa
    public boolean existsByTenSach(String tenSach) {
        return sachRepository.existsByTenSach(tenSach);
    }
    
    public boolean deleteSachByName(String tenSach) {
        List<Sach> sachList = sachRepository.findByTenSach(tenSach);
        if (!sachList.isEmpty()) {
            sachRepository.deleteAll(sachList);
            return true;
        }
        return false;
    }

    public boolean updateSachByName(String tenSach, Sach updatedBook) {
        List<Sach> sachList = sachRepository.findByTenSach(tenSach);
        if (!sachList.isEmpty()) {
            Sach sach = sachList.get(0); 
            if (updatedBook.getTacGia() != null) {
                sach.setTacGia(updatedBook.getTacGia());
            }
            if (updatedBook.getNamXuatBan() != null) {
                sach.setNamXuatBan(updatedBook.getNamXuatBan());
            }
            if (updatedBook.getTheLoai() != null) {
                sach.setTheLoai(updatedBook.getTheLoai());
            }
            if (updatedBook.getSoLuong() != null) {
                sach.setSoLuong(updatedBook.getSoLuong());
            }
            sachRepository.save(sach);
            return true;
        }
        return false;
    }
    
    
    
}
