package com.example.Back_end.Controller;

import com.example.Back_end.Model.ThanhVienTV;
import com.example.Back_end.Service.ThanhVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/thanhvien")
@CrossOrigin(origins = "http://localhost:4200")  
public class ThanhVienController {

    @Autowired
    private ThanhVienService thanhVienService;

    @GetMapping("/list")
    public List<ThanhVienTV> getAllMembers() {
        return thanhVienService.getAllMembers();  
    }

    @PostMapping("/register")
    public ThanhVienTV registerMember(@RequestBody ThanhVienTV member) {
        return thanhVienService.registerMember(member);  
    }

    @GetMapping("/search")
    public List<ThanhVienTV> searchMembersByName(@RequestParam String name) {
        return thanhVienService.searchMembersByName(name); 
    }


    @DeleteMapping("/delete/{tenThanhVien}")
    public ResponseEntity<?> deleteMemberByName(@PathVariable String tenThanhVien) {
        boolean isDeleted = thanhVienService.deleteMemberByName(tenThanhVien);
        if (isDeleted) {
            return ResponseEntity.ok(Map.of("message", "Thành viên đã được xóa thành công!"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                .body(Map.of("error", "Không tìm thấy thành viên!"));
        }
    }

    @PutMapping("/update/{tenThanhVien}")
    public ResponseEntity<?> updateMemberByName(
        @PathVariable String tenThanhVien,
        @RequestBody ThanhVienTV updatedMember) {
        boolean isUpdated = thanhVienService.updateMemberByName(tenThanhVien, updatedMember);
        if (isUpdated) {
            return ResponseEntity.ok(Map.of("message", "Thông tin thành viên đã được cập nhật thành công!"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                .body(Map.of("error", "Không tìm thấy thành viên để cập nhật!"));
        }
    }


}
