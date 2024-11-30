import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MemberService } from '../service/member.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.css'
})

export class RegisterMemberComponent implements OnInit {
  memberForm!: FormGroup;
  message: string = '';  

  constructor(private fb: FormBuilder, private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      tenThanhVien: ['', [Validators.required, Validators.minLength(4)]],
      diaChi: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.memberForm.valid) {
      const formData = this.memberForm.value;
      this.memberService.registerMember(formData).subscribe({
        next: (response) => {
          alert('Đăng kí thành công');
          this.message = 'Đăng ký thành viên thành công!';
          this.memberForm.reset();
        },
        error: (error) => {
          alert('Đăng kí thất bại');
          this.message = `Lỗi: ${error.error}`;
        }
      });
    } else {
      this.message = 'Vui lòng kiểm tra lại thông tin!';
    }
  }
}