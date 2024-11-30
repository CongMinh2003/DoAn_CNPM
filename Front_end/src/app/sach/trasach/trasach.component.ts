import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraSachService } from '../../service/tra-sach.service';

@Component({
  selector: 'app-trasach',
  templateUrl: './trasach.component.html',
  styleUrl: './trasach.component.css'
})
export class TrasachComponent {
  traSachForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private traSachService: TraSachService) {}

  ngOnInit(): void {
    this.traSachForm = this.fb.group({
      muonId: [null, [Validators.required]],
      tenThanhVien: ['', [Validators.required, Validators.maxLength(100)]],
      ngayTra: [new Date(), [Validators.required]],
      tinhTrangSach: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  onSubmit() {
    if (this.traSachForm.valid) {
      this.traSachService.returnBook(this.traSachForm.value).subscribe({
        next: (response: string) => {
          this.message = response;
          this.resetForm();
        },
        error: (err: any) => {
          console.error(err);
          this.message = 'Đã xảy ra lỗi khi trả sách. Vui lòng thử lại!';
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  private resetForm(): void {
    this.traSachForm.reset();
  }
}