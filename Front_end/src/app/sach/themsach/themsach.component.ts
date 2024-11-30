import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sach } from '../../models/sach.model';
import { SachService } from '../../service/sach.service';


@Component({
  selector: 'app-themsach',
  templateUrl: './themsach.component.html',
  styleUrls: ['./themsach.component.css']
})
export class ThemsachComponent {
  sach: Sach = new Sach(); 
  errorMessages: { [key: string]: string } = {}; 

  constructor(private sachService: SachService, private router: Router) {}

  validateFields(): boolean {
    this.errorMessages = {}; 

    if (!this.sach.tenSach) this.errorMessages['tenSach'] = 'Tên sách là bắt buộc.';
    if (!this.sach.soLuong || this.sach.soLuong < 0) this.errorMessages['soLuong'] = 'Số lượng phải lớn hơn hoặc bằng 0.';

    return Object.keys(this.errorMessages).length === 0;
  }

  onSubmit(): void {
    if (!this.validateFields()) return;

    this.sachService.addSach(this.sach).subscribe({
      next: () => {
        alert('Sách đã được thêm thành công!');
        this.router.navigate(['/books']);
      },
      error: (err: { status: number; error: { [key: string]: string; }; }) => {
        if (err.status === 400 && err.error) {
          this.errorMessages = err.error;
        } else {
          alert('Đã xảy ra lỗi không xác định!');
        }
      }
    });
  }
}
