import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      tenTK: ['', [Validators.required, Validators.minLength(4)]],
      matKhau: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.authService.register(registerData).subscribe({
        next: (response: any) => {
          alert('Đăng kí thành công');
          console.log('Đăng ký thành công:', response);
        },
        error: (error: any) => {
          alert('Đăng kí thất bại');
          console.error('Lỗi đăng ký:', error);
        }
      });
    }
  }
}
