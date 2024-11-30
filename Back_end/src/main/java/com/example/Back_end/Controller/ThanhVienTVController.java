package com.example.Back_end.Controller;

import com.example.Back_end.Model.ThanhVienTV;
import com.example.Back_end.Service.ThanhVienTVService;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/thanhvien/register")
@CrossOrigin(origins = "http://localhost:4200")
public class ThanhVienTVController {

    @Autowired
    private ThanhVienTVService thanhVienTVService;

    @PostMapping("/register")
    public ThanhVienTV registerMember(@RequestBody ThanhVienTV member) {
        return thanhVienTVService.registerMember(member);  
    }
    
}
