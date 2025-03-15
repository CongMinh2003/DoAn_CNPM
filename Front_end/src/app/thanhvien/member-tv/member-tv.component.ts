import { Component, OnInit } from '@angular/core';
import { MemberTVService } from '../../service/member-tv.service';

@Component({
  selector: 'app-member-tv',
  templateUrl: './member-tv.component.html',
  styleUrl: './member-tv.component.css'
})
export class MemberTVComponent implements OnInit {

  members: any[] = [];  
  message: string = '';  

  constructor(private memberService: MemberTVService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (data) => {
        this.members = data; 
      },
      error: (error) => {
        this.message = 'Không thể tải dữ liệu thành viên.';
        console.error(error);
      }
    });
  }
  
  searchName: string = ''; 

  searchMembers(): void {
    if (this.searchName.trim()) {
      this.memberService.searchMembersByName(this.searchName).subscribe({
        next: (data) => {
          this.members = data; 
          this.message = data.length > 0 ? '' : 'Không tìm thấy thành viên nào.';
        },
        error: (error) => {
          this.message = 'Có lỗi xảy ra khi tìm kiếm.';
          console.error(error);
        }
      });
    } else {
      this.message = 'Vui lòng nhập tên để tìm kiếm.';
    }
  }
  

}