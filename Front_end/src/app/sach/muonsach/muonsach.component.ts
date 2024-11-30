  import { Component } from '@angular/core';
  import { MuonSach } from '../../models/muon-sach.model';
  import { MuonSachService } from '../../service/muon-sach.service';
import { NgForm } from '@angular/forms';

  @Component({
    selector: 'app-muonsach',
    templateUrl: './muonsach.component.html',
    styleUrls: ['./muonsach.component.css']
  })
  export class MuonsachComponent {
    muonSach: MuonSach = {
      thanhVienId: null,
      tenThanhVien: '',
      sachId: null,
      ngayMuon: null,
      ngayTraDuKien: null
    };
    message: string = '';
    danhSachMuonSach: MuonSach[] = [];

    constructor(private muonSachService: MuonSachService) {}

    ngOnInit(): void {
      this.muonSachService.getAllMuonSach().subscribe((data) => {
        this.danhSachMuonSach = data;
      });
    }

    onSubmit(): void {
      this.muonSachService.borrowBook(this.muonSach).subscribe({
        next: () => {
          this.message = `Sách đã được mượn thành công bởi thành viên "${this.muonSach.tenThanhVien}"!`;
          this.resetForm();
          this.ngOnInit();
        },
        error: (err) => {
          console.error(err);
          this.message = `Đã xảy ra lỗi khi mượn sách. Vui lòng thử lại!`;
        }
      });
    }

    private resetForm(): void {
      this.muonSach = {
        thanhVienId: null,
        tenThanhVien: '',
        sachId: null,
        ngayMuon: null,
        ngayTraDuKien: null
      };
    }
  }
