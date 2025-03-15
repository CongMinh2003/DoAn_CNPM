package com.example.Back_end.Controller;


import com.example.Back_end.Model.BaoCao;
import com.example.Back_end.Service.BaoCaoService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BaoCaoController {

    @Autowired
    private BaoCaoService baoCaoService;

    @PostMapping("/bao-cao")
    public ResponseEntity<Map<String, String>> createReport(@RequestBody BaoCao baoCao) {
        baoCaoService.saveBaoCao(baoCao);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Báo cáo đã được tạo thành công!");
        return ResponseEntity.ok(response);
    }

}
