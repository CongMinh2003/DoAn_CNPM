describe("Mượn sách", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/Muonsach");
    });
  
    it("TC_011 - Mượn sách thành công", () => {
      // Nhập mã thành viên
      cy.get("input[name='thanhVienId']").type("1001");
  
      // Nhập tên thành viên
      cy.get("input[name='tenThanhVien']").type("Nguyễn Văn A");
  
      // Nhập mã sách
      cy.get("input[name='sachId']").type("2001");
  
      // Nhập ngày trả dự kiến
      cy.get("input[name='ngayTraDuKien']").type("2025-03-20");
  
      // Giả lập API trả về kết quả thành công
      cy.intercept("POST", "/api/muonsach", {
        statusCode: 200,
        body: {
          message: "Sách đã được mượn thành công bởi thành viên Nguyễn Văn A",
        },
      });
  
      // Nhấn nút "Mượn Sách"
      cy.get("button").contains("Mượn Sách").click();
  
      // Kiểm tra thông báo thành công
      cy.contains("Sách đã được mượn thành công bởi thành viên Nguyễn Văn A").should("be.visible");
    });
  
    it("TC_012 - Mượn sách không thành công (Dữ liệu trống)", () => {
      // Nhấn nút "Mượn Sách" mà không nhập thông tin
      cy.get("button").contains("Mượn Sách").click();
  
      // Kiểm tra hiển thị thông báo lỗi với các trường bị thiếu
      cy.contains("Mã thành viên là bắt buộc!").should("be.visible");
      cy.contains("Tên thành viên là bắt buộc!").should("be.visible");
      cy.contains("Mã sách là bắt buộc!").should("be.visible");
      cy.contains("Ngày trả dự kiến là bắt buộc!").should("be.visible");
    });
  
    it("TC_012 - Mượn sách không thành công (Thành viên chưa đăng ký)", () => {
      // Nhập thông tin thành viên không tồn tại
      cy.get("input[name='thanhVienId']").type("9999");
      cy.get("input[name='tenThanhVien']").type("Không Tồn Tại");
      cy.get("input[name='sachId']").type("2001");
      cy.get("input[name='ngayTraDuKien']").type("2025-03-20");
  
      // Giả lập API trả về lỗi
      cy.intercept("POST", "/api/muonsach", {
        statusCode: 400,
        body: {
          message: "Đã xảy ra lỗi khi mượn sách. Vui lòng thử lại!",
        },
      });
  
      // Nhấn nút "Mượn Sách"
      cy.get("button").contains("Mượn Sách").click();
  
      // Kiểm tra thông báo lỗi
      cy.contains("Đã xảy ra lỗi khi mượn sách. Vui lòng thử lại!").should("be.visible");
    });
  });
  