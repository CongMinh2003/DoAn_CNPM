package com.example.Back_end.Service;

import com.example.Back_end.Model.ThanhVienTV;
import com.example.Back_end.Repository.ThanhVienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThanhVienService {

    @Autowired
    private ThanhVienRepository thanhVienRepository;

    public List<ThanhVienTV> getAllMembers() {
        return thanhVienRepository.findAll(); 
    }

    public ThanhVienTV registerMember(ThanhVienTV member) {
        return thanhVienRepository.save(member); 
    }

    
    public List<ThanhVienTV> searchMembersByName(String name) {
        return thanhVienRepository.findByTenThanhVienContainingIgnoreCase(name); 
    }

    public boolean deleteMemberByName(String tenThanhVien) {
        Optional<ThanhVienTV> member = thanhVienRepository.findByTenThanhVien(tenThanhVien);
        if (member.isPresent()) {
            thanhVienRepository.delete(member.get());
            return true;
        }
        return false;
    }

    public boolean updateMemberByName(String tenThanhVien, ThanhVienTV updatedMember) {
        Optional<ThanhVienTV> member = thanhVienRepository.findByTenThanhVien(tenThanhVien);
        if (member.isPresent()) {
            ThanhVienTV existingMember = member.get();
            existingMember.setDiaChi(updatedMember.getDiaChi());
            existingMember.setEmail(updatedMember.getEmail());
            thanhVienRepository.save(existingMember);
            return true;
        }
        return false;
    }
    
}
