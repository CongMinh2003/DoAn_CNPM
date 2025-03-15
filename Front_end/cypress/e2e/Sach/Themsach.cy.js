describe("Kiểm thử chức năng Thêm Sách", () => {
    beforeEach(() => {
      // Điều hướng đến trang thêm sách
      cy.visit("http://localhost:4200/Themsach");
    });
  
    it("TC_003 - Thêm sách thành công", () => {
      // Nhập thông tin hợp lệ cho sách
      cy.get("input[name='tenSach']").type("Lập Trình Hadoop");
      cy.get("input[name='tacGia']").type("Nguyễn Văn A");
      cy.get("input[name='namXuatBan']").type("2023");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("10");
  
      // Nhấn nút "Thêm Sách"
      cy.get("button[type='submit']").click();
  
      // Kiểm tra hiển thị thông báo thành công
    //   cy.contains("Sách đã được thêm thành công").should("be.visible");
  
      // Kiểm tra xem dữ liệu có được thêm vào CSDL không (nếu API mock hoặc kiểm tra trong danh sách)
    //   cy.request("GET", "http://localhost:8080/api/sach").then((response) => {
    //     expect(response.status).to.eq(200);
    //     expect(response.body).to.deep.include({
    //       tenSach: "Lập Trình Java",
    //       tacGia: "Nguyễn Văn A",
    //       namXuatBan: 2023,
    //       theLoai: "Lập trình",
    //       soLuong: 10,
    //     });
    //   });
    });
  
    it("TC_004 - Thêm sách không thành công - Tên sách trống", () => {
      // Bỏ trống tên sách
      cy.get("input[name='tenSach']").clear();
      cy.get("input[name='tacGia']").type("Nguyễn Văn A");
      cy.get("input[name='namXuatBan']").type("2023");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("10");
  
      // Nhấn nút "Thêm Sách"
      cy.get("button[type='submit']").click();
  
      // Kiểm tra thông báo lỗi
      cy.contains("Tên sách là bắt buộc.").should("be.visible");
    });
  
    it("TC_004 - Thêm sách không thành công - Tên sách đã tồn tại", () => {
      // Nhập thông tin với tên sách đã có trong CSDL
      cy.get("input[name='tenSach']").type("Lập Trình Java"); // Giả sử sách này đã tồn tại
      cy.get("input[name='tacGia']").type("Nguyễn Văn A");
      cy.get("input[name='namXuatBan']").type("2023");
      cy.get("input[name='theLoai']").type("Lập trình");
      cy.get("input[name='soLuong']").type("10");
  
      // Nhấn nút "Thêm Sách"
      cy.get("button[type='submit']").click();
  
      // Kiểm tra thông báo lỗi
      cy.contains("Tên sách đã tồn tại!").should("be.visible");
    });
  });
  