package com.example.Back_end.Controller;

import com.example.Back_end.Model.Sach;
import com.example.Back_end.Service.SachService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sach")
public class BookController {

    @Autowired
    private SachService sachService;

    @GetMapping("/all")
    public List<Sach> getAllSach() {
        return sachService.getAllSach();
    }

    @GetMapping("/search")
    public List<Sach> searchBooksByName(@RequestParam String name) {
        return sachService.searchBooksByName(name);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addSach(@Validated @RequestBody Sach sach) {
        if (sachService.existsByTenSach(sach.getTenSach())) {
            Map<String, String> error = new HashMap<>();
            error.put("tenSach", "Tên sách đã tồn tại!");
            return ResponseEntity.badRequest().body(error);
        }
        Sach savedSach = sachService.saveSach(sach);
        return ResponseEntity.ok(savedSach);
    }


    @DeleteMapping("/delete/{tenSach}")
    public ResponseEntity<Map<String, String>> deleteSachByName(@PathVariable String tenSach) {
        boolean isDeleted = sachService.deleteSachByName(tenSach);
        Map<String, String> response = new HashMap<>();
        if (isDeleted) {
            response.put("message", "Sách đã được xóa thành công!");
            return ResponseEntity.ok(response); 
        } else {
            response.put("message", "Không tìm thấy sách!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PutMapping("/update/{tenSach}")
    public ResponseEntity<Map<String, String>> updateSachByName(
        @PathVariable String tenSach,
        @RequestBody Sach updatedBook) {
        boolean isUpdated = sachService.updateSachByName(tenSach, updatedBook);
        Map<String, String> response = new HashMap<>();
        if (isUpdated) {
            response.put("message", "Thông tin sách đã được cập nhật thành công!");
            return ResponseEntity.ok(response); 
        } else {
            response.put("message", "Không tìm thấy sách để cập nhật!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }


}
