describe("Xóa Sách", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/Xoasach");
    });
  
    it("TC_005 - Xóa sách thành công", () => {
      cy.get('input[name="tenSach"]').type("Lập trình Angular");
      cy.get("button[type='submit']").click();
      
      // Kiểm tra thông báo thành công
      cy.contains("Sách đã được xóa thành công").should("be.visible");
  
      // Giả lập API gọi xóa thành công (nếu có backend)
      cy.intercept("DELETE", "/api/sach/**", {
        statusCode: 200,
        body: { message: "Sách đã được xóa thành công" },
      });
    });
  
    it("TC_006 - Xóa sách không thành công (Tên sách trống)", () => {
      cy.get("button[type='submit']").click();
  
      // Kiểm tra thông báo lỗi
      cy.contains("Không tìm thấy sách").should("be.visible");
    });
  
    it("TC_006 - Xóa sách không thành công (Tên sách không tồn tại)", () => {
      cy.get('input[name="tenSach"]').type("Sách không tồn tại");
      cy.get("button[type='submit']").click();
  
      // Giả lập API gọi xóa thất bại
      cy.intercept("DELETE", "/api/sach/**", {
        statusCode: 404,
        body: { message: "Không tìm thấy sách" },
      });
  
      // Kiểm tra thông báo lỗi
      cy.contains("Không tìm thấy sách").should("be.visible");
    });
  });
  