describe("Tìm kiếm sách", () => {
    beforeEach(() => {
      cy.visit("http://localhost:4200/Sach");
    });
  
    it("Tìm kiếm sách thành công", () => {
      // Nhập tên sách hợp lệ 
      cy.get("input[placeholder='Nhập tên sách']").type("Lập trình Angular");
  
      // Nhấn nút Tìm kiếm
      cy.get("button").contains("Tìm kiếm").click();
  
      // Giả lập API phản hồi danh sách sách tìm thấy
      cy.intercept("GET", "/api/sach?tenSach=Lập trình Angular", {
        statusCode: 200,
        body: [
          {
            tenSach: "Lập trình Angular",
            tacGia: "Nguyễn Văn A",
            namXuatBan: 2023,
            theLoai: "CNTT",
            soLuong: 10,
          },
        ],
      });
  
      // Kiểm tra thông tin sách hiển thị
      cy.contains("Lập trình Angular").should("be.visible");
      cy.contains("Nguyễn Văn A").should("be.visible");
      cy.contains("2023").should("be.visible");
    });
  
    it("Tìm kiếm sách không thành công (Tên sách trống)", () => {
      // Nhấn nút Tìm kiếm mà không nhập tên sách
      cy.get("button").contains("Tìm kiếm").click();
  
      // Kiểm tra hiển thị thông báo lỗi
      cy.contains("Vui lòng nhập tên sách để tìm kiếm.").should("be.visible");
    });
  
    it("Tìm kiếm sách không thành công (Tên sách không tồn tại)", () => {
      // Nhập tên sách không có trong hệ thống
      cy.get("input[placeholder='Nhập tên sách']").type("Sách không tồn tại");
  
      // Nhấn nút Tìm kiếm
      cy.get("button").contains("Tìm kiếm").click();
  
      // Giả lập API trả về danh sách rỗng
      cy.intercept("GET", "/api/sach?tenSach=Sách không tồn tại", {
        statusCode: 200,
        body: [],
      });
  
      // Kiểm tra hiển thị thông báo "Không tìm thấy sách nào."
      cy.contains("Không tìm thấy sách nào.").should("be.visible");
    });
  });
  