import { Component } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css'
})
export class TrangchuComponent {
  title = 'Quản Lý Thư Viện';
  description = 'Chào mừng bạn đến với hệ thống quản lý thư viện.';

  books = [
    { id: 1, title: 'Vang danh nghề cổ', author: 'Kim Đồng', year: 2020 },
    { id: 2, title: 'Chuyện hay sử Việt', author: 'Kim Đồng', year: 2021 },
    { id: 3, title: 'Nếu tất cả những gì tôi có là ngôn từ', author: 'Kim Đồng', year: 2022 },
  ];
}
