import { Component, OnInit } from '@angular/core';
import { Sach } from '../models/sach.model';
import { SachService } from '../service/sach.service';

@Component({
  selector: 'app-sach-list',
  templateUrl: './sach-list.component.html',
  styleUrl: './sach-list.component.css'
})
export class SachListComponent implements OnInit {
  sachList: Sach[] = [];

  constructor(private sachService: SachService) { }

  ngOnInit(): void {
    this.loadSachList();
  }

  loadSachList(): void {
    this.sachService.getSachList().subscribe((data: Sach[]) => {
      this.sachList = data;
    });
  }

  
  searchName: string = ''; 
  message: string = ''; 

  searchBooks(): void {
    if (this.searchName.trim()) {
      this.sachService.searchBooksByName(this.searchName).subscribe({
        next: (data) => {
          this.sachList = data;
          this.message = data.length > 0 ? '' : 'Không tìm thấy sách nào.';
        },
        error: (error) => {
          this.message = 'Có lỗi xảy ra khi tìm kiếm.';
          console.error(error);
        }
      });
    } else {
      this.message = 'Vui lòng nhập tên sách để tìm kiếm.';
    }
  }

}