describe('Xóa thành viên', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/Xoathanhvien'); 
    });
  
    it('TC_023 - Xóa thành viên thành công', () => {
      cy.get('input[placeholder="Nhập tên thành viên"]').type('Nguyễn Văn A'); 
      cy.contains('button', 'Xóa').click(); 
  
      // Kiểm tra thông báo thành công
      cy.contains('Thành viên đã được xóa thành công!').should('be.visible');
    });
  
    it('TC_024 - Xóa thành viên không thành công - tên không tồn tại', () => {
      cy.get('input[placeholder="Nhập tên thành viên"]').type('Không Tồn Tại');
      cy.contains('button', 'Xóa').click();
  
      // Kiểm tra thông báo lỗi
      cy.contains('Không tìm thấy thành viên hoặc xảy ra lỗi!').should('be.visible');
    });
  
    it('TC_024 - Xóa thành viên không thành công - thông tin trống', () => {
      cy.contains('button', 'Xóa').click(); // Không nhập tên, nhấn Xóa
  
      // Kiểm tra thông báo lỗi
      cy.contains('Vui lòng nhập tên thành viên!').should('be.visible');
    });
  });
  