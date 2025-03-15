describe('Chức năng Trả Sách', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/Trasach');
    });
  
    it('TC_016 - Trả sách thành công', () => {
      // Nhập mã mượn hợp lệ
      cy.get("input[formControlName='muonId']").type("3001");
      
      // Nhập tên thành viên hợp lệ
      cy.get("input[formControlName='tenThanhVien']").type("Nguyễn Văn B");
      
      // Nhập ngày trả hợp lệ
      cy.get("input[formControlName='ngayTra']").type("2025-03-20");
      
      // Nhập tình trạng sách hợp lệ
      cy.get("input[formControlName='tinhTrangSach']").type("Tốt");
      
      // Giả lập API trả về kết quả thành công
      cy.intercept("POST", "/api/trasach", {
        statusCode: 200,
        body: {
          message: "Thông tin trả sách đã được lưu thành công!",
        },
      });
      
      // Nhấn nút "Xác nhận trả"
      cy.get("button").contains("Xác Nhận Trả Sách").click();
      
      // Kiểm tra thông báo thành công
      cy.contains("Thông tin trả sách đã được lưu thành công!").should("be.visible");
    });
  
    it('TC_017 - Trả sách không thành công (Dữ liệu trống)', () => {
      // Nhấn nút "Xác nhận trả" mà không nhập thông tin
      cy.get("button").contains("Xác Nhận Trả Sách").click();
      
      // Kiểm tra hiển thị thông báo lỗi với các trường bị thiếu
      cy.contains("Mã mượn là bắt buộc.").should("be.visible");
      cy.contains("Tên thành viên là bắt buộc.").should("be.visible");
      cy.contains("Ngày trả là bắt buộc.").should("be.visible");
      cy.contains("Tình trạng sách là bắt buộc.").should("be.visible");
    });
  
    it('TC_017 - Trả sách không thành công (Mã mượn không tồn tại)', () => {
      // Nhập mã mượn không tồn tại
      cy.get("input[formControlName='muonId']").type("9999");
      cy.get("input[formControlName='tenThanhVien']").type("Không Tồn Tại");
      cy.get("input[formControlName='ngayTra']").type("2025-03-20");
      cy.get("input[formControlName='tinhTrangSach']").type("Hỏng");
      
      // Giả lập API trả về lỗi
      cy.intercept("POST", "/api/trasach", {
        statusCode: 400,
        body: {
          message: "Đã xảy ra lỗi khi trả sách. Vui lòng thử lại!",
        },
      });
      
      // Nhấn nút "Xác nhận trả"
      cy.get("button").contains("Xác Nhận Trả Sách").click();
      
      // Kiểm tra thông báo lỗi
      cy.contains("Đã xảy ra lỗi khi trả sách. Vui lòng thử lại!").should("be.visible");
    });
  });