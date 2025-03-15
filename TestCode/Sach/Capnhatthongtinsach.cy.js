describe('Cập nhật thông tin sách', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/Capnhatthongtinsach');
    });
  
    it('TC_001 - Sửa thông tin sách thành công', () => {
      cy.get("input[name='tenSach']").type("Lập Trình Python");
      cy.get("input[name='tacGia']").type("Nguyễn Văn B");
      cy.get("input[name='namXuatBan']").type("2024");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("15");
      
      cy.get("button[type='submit']").click();
      
      cy.contains("Sửa thông tin sách thành công").should("be.visible");
    });
  
    it('TC_002 - Sửa thông tin sách không thành công - Tên sách trống', () => {
      cy.get("input[name='tenSach']").clear();
      cy.get("input[name='tacGia']").type("Nguyễn Văn B");
      cy.get("input[name='namXuatBan']").type("2024");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("15");
      
      cy.get("button[type='submit']").click();
      
      cy.contains("Không tìm thấy sách").should("be.visible");
    });
  
    it('TC_003 - Sửa thông tin sách không thành công - Tên sách không tồn tại', () => {
      cy.get("input[name='tenSach']").type("Sách Không Tồn Tại");
      cy.get("input[name='tacGia']").type("Nguyễn Văn B");
      cy.get("input[name='namXuatBan']").type("2024");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("15");
      
      cy.get("button[type='submit']").click();
      
      cy.contains("Không tìm thấy sách").should("be.visible");
    });
  });
  