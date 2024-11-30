package com.example.Back_end.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class TestController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/test-connection")
    public ResponseEntity<String> testConnection() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return ResponseEntity.ok("Kết nối thành công với SQL Server!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Kết nối thất bại: " + e.getMessage());
        }
    }

    @GetMapping("/tables")
    public ResponseEntity<List<String>> getAllTables() {
        try {
            String sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
            List<String> tables = jdbcTemplate.queryForList(sql, String.class);
            return ResponseEntity.ok(tables);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/tai-khoans")
    public ResponseEntity<List<Map<String, Object>>> getAllTaiKhoans() {
        try {
            String sql = "SELECT * FROM TaiKhoan";
            List<Map<String, Object>> taiKhoans = jdbcTemplate.queryForList(sql);
            return ResponseEntity.ok(taiKhoans);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
