import { Component } from '@angular/core';
import { TraSach } from '../../models/tra-sach.model';
import { TraSachService } from '../../service/tra-sach.service';

@Component({
  selector: 'app-danhsachtrasach',
  templateUrl: './danhsachtrasach.component.html',
  styleUrl: './danhsachtrasach.component.css'
})
export class DanhsachtrasachComponent {
  danhSachTraSach: TraSach[] = [];
  searchQuery: string = '';

  constructor(private traSachService: TraSachService) {}

  ngOnInit(): void {
    this.loadReturnInfo();
  }

  loadReturnInfo(): void {
    this.traSachService.getAllReturnInfo().subscribe((data) => {
      this.danhSachTraSach = data;
    });
  }

  searchMember(): void {
    if (this.searchQuery.trim() === '') {
      this.loadReturnInfo();
    } else {
      this.traSachService.searchByMemberName(this.searchQuery).subscribe((data) => {
        this.danhSachTraSach = data;
      });
    }
  }

}
