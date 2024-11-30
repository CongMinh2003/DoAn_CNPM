package com.example.Back_end.Controller;

// public class RegisterController {
    
// }

import com.example.Back_end.Model.TaiKhoan;
import com.example.Back_end.Service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private TaiKhoanService taiKhoanService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<Map<String, String>> register(@RequestBody TaiKhoan registerRequest) {
        boolean accountExists = taiKhoanService.checkAccountExists(registerRequest.getTenTK());

        Map<String, String> response = new HashMap<>();
        if (accountExists) {
            response.put("message", "Tên tài khoản đã tồn tại");
            return ResponseEntity.status(400).body(response);
        } else {
            taiKhoanService.saveTaiKhoan(registerRequest);
            response.put("message", "Đăng ký thành công");
            return ResponseEntity.ok(response);
        }
    }
}
