import { Component } from '@angular/core';
import { BaocaoService } from '../service/baocao.service';
import { NgForm } from '@angular/forms';
import { BaoCao } from '../models/baocao';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  constructor(private baoCaoService: BaocaoService) {}
  createReport(form: NgForm): void {
    if (form.valid) {
      const baoCao = form.value;
      this.baoCaoService.createReport(baoCao).subscribe(
        response => {
          alert(response.message);
          form.reset();
        },
        error => {
          alert('Có lỗi xảy ra khi tạo báo cáo.');
          console.error(error);
        }
      );
    }
  }
  

}
