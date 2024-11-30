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
    { id: 1, title: 'Sách 1', author: 'Tác giả 1', year: 2020 },
    { id: 2, title: 'Sách 2', author: 'Tác giả 2', year: 2021 },
    { id: 3, title: 'Sách 3', author: 'Tác giả 3', year: 2022 },
  ];
}
