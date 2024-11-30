import { Component } from '@angular/core';
import { MemberService } from '../../service/member.service';
import { MemberTVService } from '../../service/member-tv.service';

@Component({
  selector: 'app-capnhatthongtinthanhvien',
  templateUrl: './capnhatthongtinthanhvien.component.html',
  styleUrl: './capnhatthongtinthanhvien.component.css'
})
export class CapnhatthongtinthanhvienComponent {
  member = {
    tenThanhVien: '',
    diaChi: '',
    email: '',
  };

  constructor(private memberService: MemberTVService) {}

  onUpdate(): void {
    if (this.member.tenThanhVien.trim() && this.member.email.trim()) {
      this.memberService.updateMemberByName(this.member).subscribe({
        next: () => {
          alert('Thông tin thành viên đã được cập nhật thành công!');
          this.member = { tenThanhVien: '', diaChi: '', email: '' };
        },
        error: (err: any) => {
          console.error(err);
          alert('Đã xảy ra lỗi khi cập nhật thông tin thành viên!');
        },
      });
    } else {
      alert('Vui lòng nhập đầy đủ tên thành viên và email!');
    }
  }
}
