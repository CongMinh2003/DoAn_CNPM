import { Component } from '@angular/core';
import { SachService } from '../../service/sach.service';

@Component({
  selector: 'app-xoasach',
  templateUrl: './xoasach.component.html',
  styleUrl: './xoasach.component.css'
})
export class XoasachComponent {
  tenSach: string = '';
  message: string = '';

  constructor(private sachService: SachService) {}

  onDelete(): void {
    this.sachService.deleteSachByName(this.tenSach).subscribe({
      next: (response: any) => {
        this.message = response.message; 
        this.tenSach = ''; 
      },
      error: (err: any) => {
        console.error('Lỗi từ API:', err);
        this.message = `Không tìm thấy sách "${this.tenSach}" hoặc đã xảy ra lỗi khi xóa.`;
      }
    });
  }
  

}
