import { Component } from '@angular/core';
import { MemberService } from '../../service/member.service';
import { MemberTVService } from '../../service/member-tv.service';

@Component({
  selector: 'app-xoathanhvien',
  templateUrl: './xoathanhvien.component.html',
  styleUrl: './xoathanhvien.component.css'
})
export class XoathanhvienComponent {
  tenThanhVien: string = '';

  constructor(private memberService: MemberTVService) {}

  onDelete(): void {
    if (this.tenThanhVien.trim()) {
      this.memberService.deleteMemberByName(this.tenThanhVien).subscribe({
        next: (response: any) => {
          alert(response.message); 
          this.tenThanhVien = ''; 
        },
        error: (err: any) => {
          console.error(err);
          alert('Không tìm thấy thành viên hoặc xảy ra lỗi!');
        },
      });
    } else {
      alert('Vui lòng nhập tên thành viên!');
    }
  }
  
}