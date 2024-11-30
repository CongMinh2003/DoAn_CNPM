package com.example.Back_end.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Back_end.Model.ThongTinTraSach;
import com.example.Back_end.Repository.ThongTinTraSachRepository;

@Service
public class ThongTinTraSachService {

    @Autowired
    private ThongTinTraSachRepository thongTinTraSachRepository;

    public void addReturnInfo(ThongTinTraSach thongTinTraSach) {
        thongTinTraSachRepository.save(thongTinTraSach);
    }

    public List<ThongTinTraSach> getAllReturnInfo() {
        return thongTinTraSachRepository.findAll();
    }

    public List<ThongTinTraSach> searchByMemberName(String memberName) {
        return thongTinTraSachRepository.findByTenThanhVienContainingIgnoreCase(memberName);
    }
}
