describe('Đăng ký thành viên', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/Register-member');
    });
  
    it('Thêm thành viên thành công', () => {
      cy.get('#tenThanhVien').type('Nguyễn Văn A');
      cy.get('#diaChi').type('Hà Nội');
      cy.get('#email').type('nguyenvana@example.com');
      cy.get('button[type="submit"]').click();
  
      cy.get('.alert-success').should('contain', 'Đăng kí thành công');
    });
  
    it('Thêm thành viên không thành công (Email bị trùng)', () => {
      cy.get('#tenThanhVien').type('Nguyễn Văn B');
      cy.get('#diaChi').type('Hồ Chí Minh');
      cy.get('#email').type('trungemail@example.com');
      cy.get('button[type="submit"]').click();
  
      cy.get('.alert-danger').should('contain', 'Đăng kí thất bại');
    });
  });
  