import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  
  constructor(private http: HttpClient  ,private router: Router) {}

  onSubmit() {
    const loginData = {
      tenTK: this.username,
      matKhau: this.password
    };

    this.http.post('http://localhost:8080/api/login', loginData)
      .subscribe({
        next: (response) => {
          console.log(response);      
          this.router.navigate(['/Home']);
        },
        error: (error) => {
          alert('Sai tài khoản hoặc mật khẩu');
          console.error('Error logging in', error);
          // alert('Invalid username or password');
        }
      });
  }


}
