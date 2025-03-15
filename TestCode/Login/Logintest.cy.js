describe("Kiểm thử chức năng đăng nhập", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200//Login"); // Điều hướng đến trang đăng nhập trước mỗi test
    });
  
    it("TC_001 - Đăng nhập thành công", () => {
      cy.get("#username").type("CongMinh"); // Nhập username
      cy.get("#password").type("2003"); // Nhập mật khẩu
      cy.get("#btnLogin").click(); // Nhấn nút Đăng nhập
  
      // Kiểm tra điều hướng sau đăng nhập thành công (tùy theo hệ thống của bạn)
      cy.url().should("not.include", "/Login"); // Kiểm tra không còn ở trang đăng nhập
    //   cy.contains("Xin chào, CongMinh").should("be.visible"); // Kiểm tra có lời chào
    });
  
    it("TC_002 - Đăng nhập thất bại", () => {
      cy.get("#username").type("SaiTaiKhoan"); // Nhập sai username
      cy.get("#password").type("SaiMatKhau"); // Nhập sai mật khẩu
      cy.get("#btnLogin").click(); // Nhấn nút Đăng nhập
  
      // Kiểm tra thông báo lỗi hiển thị
      cy.contains("Sai tài khoản hoặc mật khẩu").should("be.visible");
    });
  });
  