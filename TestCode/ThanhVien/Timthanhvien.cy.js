describe('Tìm kiếm thành viên', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/MemberTV'); 
    });
  
    it('TC_027 - Tìm kiếm thành viên thành công', () => {
      cy.get('input[placeholder="Nhập tên thành viên"]').type('Nguyen Van A'); 
      cy.contains('button', 'Tìm kiếm').click(); 
  
      // Kiểm tra kết quả tìm kiếm có chứa tên thành viên
      cy.get('table tbody tr').should('contain', 'Nguyen Van A');
    });
  
    it('TC_028 - Tìm kiếm thành viên không thành công', () => {
      cy.get('input[placeholder="Nhập tên thành viên"]').type('TênKhôngTồnTại');
      cy.contains('button', 'Tìm kiếm').click();
  
      // Kiểm tra thông báo lỗi xuất hiện
      cy.contains('Không tìm thấy thành viên nào.').should('be.visible');
    });
  
    it('TC_028 - Tìm kiếm khi không nhập tên', () => {
      cy.contains('button', 'Tìm kiếm').click(); // Nhấn nút tìm kiếm mà không nhập tên
  
      // Kiểm tra thông báo lỗi xuất hiện
      cy.contains('Vui lòng nhập tên để tìm kiếm.').should('be.visible');
    });
  });
  