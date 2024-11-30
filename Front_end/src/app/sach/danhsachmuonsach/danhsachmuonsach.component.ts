import { Component } from '@angular/core';
import { MuonSach } from '../../models/muon-sach.model';
import { MuonSachService } from '../../service/muon-sach.service';

@Component({
  selector: 'app-danhsachmuonsach',
  templateUrl: './danhsachmuonsach.component.html',
  styleUrl: './danhsachmuonsach.component.css'
})
export class DanhsachmuonsachComponent {
  danhSachMuonSach: MuonSach[] = [];
  searchQuery: string = '';

  constructor(private muonSachService: MuonSachService) {}

  ngOnInit(): void {
    this.muonSachService.getAllMuonSach().subscribe((data) => {
      this.danhSachMuonSach = data;
    });
  }

  searchMember(): void {
    if (this.searchQuery.trim() === '') {
      this.muonSachService.getAllMuonSach().subscribe((data) => {
        this.danhSachMuonSach = data;
      });
    } else {
      this.muonSachService.searchByMemberName(this.searchQuery).subscribe((data) => {
        this.danhSachMuonSach = data;
      });
    }
  }

}
