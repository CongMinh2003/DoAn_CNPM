package com.example.Back_end.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Back_end.Model.ThongTinMuonSach;
import com.example.Back_end.Repository.ThongTinMuonSachRepository;

@Service
public class ThongTinMuonSachService {

    @Autowired
    private ThongTinMuonSachRepository thongTinMuonSachRepository;

    public void addBorrowInfo(ThongTinMuonSach muonSach) {
        thongTinMuonSachRepository.save(muonSach);
    }

    public List<ThongTinMuonSach> getAllBorrowedBooks() {
        return thongTinMuonSachRepository.findAll();
    }

    public List<ThongTinMuonSach> searchByMemberName(String memberName) {
        return thongTinMuonSachRepository.findByTenThanhVienContainingIgnoreCase(memberName);
    }

}
