package com.example.Back_end.Controller;

import com.example.Back_end.Model.TaiKhoan;
import com.example.Back_end.Service.TaiKhoanService;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private TaiKhoanService taiKhoanService;

     @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<Map<String, String>> login(@RequestBody TaiKhoan loginRequest) {
        boolean isAuthenticated = taiKhoanService.authenticate(loginRequest.getTenTK(), loginRequest.getMatKhau());

        Map<String, String> response = new HashMap<>();
        if (isAuthenticated) {
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(401).body(response);
        }
    }


    //Test login thẳng
    @GetMapping("/test-login")
    public ResponseEntity<Map<String, String>> testLogin() {
        String tenTK = "CongMinh"; 
        String matKhau = "2003"; 
        boolean isAuthenticated = taiKhoanService.authenticate(tenTK, matKhau);

        Map<String, String> response = new HashMap<>();
        if (isAuthenticated) {
            response.put("message", "Login successful for test user");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password for test user");
            return ResponseEntity.status(401).body(response);
        }
    }
    
}
