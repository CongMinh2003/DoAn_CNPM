import { Component } from '@angular/core';
import { Sach } from '../../models/sach.model';
import { SachService } from '../../service/sach.service';

@Component({
  selector: 'app-capnhatthongtinsach',
  templateUrl: './capnhatthongtinsach.component.html',
  styleUrl: './capnhatthongtinsach.component.css'
})
export class CapnhatthongtinsachComponent {
  tenSach: string = ''; 
  updatedBook: Partial<Sach> = {}; 
  message: string = '';

  constructor(private sachService: SachService) {}

  onUpdate(): void {
    this.sachService.updateSachByName(this.tenSach, this.updatedBook).subscribe({
      next: (response: any) => {
        this.message = response.message; 
        this.resetForm();
      },
      error: (err: any) => {
        console.error('Lỗi từ API:', err);
        if (err.status === 404) {
          this.message = `Không tìm thấy sách "${this.tenSach}".`;
        } else {
          this.message = `Đã xảy ra lỗi khi cập nhật sách: ${err.message}`;
        }
      }
    });
  }
  

  private resetForm(): void {
    this.tenSach = '';
    this.updatedBook = {};
  }
}
