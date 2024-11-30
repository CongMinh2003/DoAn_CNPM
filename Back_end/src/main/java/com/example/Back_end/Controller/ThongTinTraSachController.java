package com.example.Back_end.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_end.Model.ThongTinTraSach;
import com.example.Back_end.Service.ThongTinTraSachService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ThongTinTraSachController {

    @Autowired
    private ThongTinTraSachService thongTinTraSachService;

    @PostMapping("/tra-sach")
    public ResponseEntity<String> returnBook(@RequestBody ThongTinTraSach thongTinTraSach) {
        thongTinTraSachService.addReturnInfo(thongTinTraSach);
        return ResponseEntity.ok("Thông tin trả sách đã được lưu thành công!");
    }
    
    @GetMapping("/tra-sach")
    public ResponseEntity<List<ThongTinTraSach>> getAllReturnInfo() {
        List<ThongTinTraSach> danhSachTraSach = thongTinTraSachService.getAllReturnInfo();
        return ResponseEntity.ok(danhSachTraSach);
    }

    @GetMapping("/tra-sach/search")
    public ResponseEntity<List<ThongTinTraSach>> searchReturnInfo(@RequestParam String memberName) {
        List<ThongTinTraSach> danhSachTraSach = thongTinTraSachService.searchByMemberName(memberName);
        return ResponseEntity.ok(danhSachTraSach);
}

}
