package com.example.Back_end.Controller;


import com.example.Back_end.Model.BaoCao;
import com.example.Back_end.Service.BaoCaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BaoCaoController {

    @Autowired
    private BaoCaoService baoCaoService;

    @PostMapping("/bao-cao")
    public ResponseEntity<String> createReport(@RequestBody BaoCao baoCao) {
        baoCaoService.saveBaoCao(baoCao);
        return ResponseEntity.ok("Báo cáo đã được tạo thành công!");
    }
}
