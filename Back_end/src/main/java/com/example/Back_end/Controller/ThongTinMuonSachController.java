package com.example.Back_end.Controller;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.Back_end.Model.ThongTinMuonSach;
// import com.example.Back_end.Service.ThongTinMuonSachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Back_end.Model.ThongTinMuonSach;
import com.example.Back_end.Service.ThongTinMuonSachService;


@RestController
@RequestMapping("/api")
public class ThongTinMuonSachController { 

    @Autowired
    private ThongTinMuonSachService thongTinMuonSachService;

    @PostMapping("/muon-sach")
    public ResponseEntity<String> borrowBook(@RequestBody ThongTinMuonSach muonSach) {
        thongTinMuonSachService.addBorrowInfo(muonSach);
        return ResponseEntity.ok("Sách đã được mượn thành công!");  
    }

    @GetMapping("/muon-sach")
    public ResponseEntity<List<ThongTinMuonSach>> getAllBorrowedBooks() {
        List<ThongTinMuonSach> danhSachMuonSach = thongTinMuonSachService.getAllBorrowedBooks();
        return ResponseEntity.ok(danhSachMuonSach);
    }

    @GetMapping("/muon-sach/search")
    public ResponseEntity<List<ThongTinMuonSach>> searchBorrowedBooks(@RequestParam String memberName) {
        List<ThongTinMuonSach> danhSachMuonSach = thongTinMuonSachService.searchByMemberName(memberName);
        return ResponseEntity.ok(danhSachMuonSach);
    }
    
}

