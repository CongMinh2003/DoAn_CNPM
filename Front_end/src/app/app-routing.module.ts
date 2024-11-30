import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { MemberTVComponent } from './member-tv/member-tv.component';
import { SachListComponent } from './sach-list/sach-list.component';
import { ReportComponent } from './report/report.component';
import { ThemsachComponent } from './sach/themsach/themsach.component';
import { XoasachComponent } from './sach/xoasach/xoasach.component';
import { CapnhatthongtinsachComponent } from './sach/capnhatthongtinsach/capnhatthongtinsach.component';
import { MuonsachComponent } from './sach/muonsach/muonsach.component';
import { TrasachComponent } from './sach/trasach/trasach.component';
import { XoathanhvienComponent } from './thanhvien/xoathanhvien/xoathanhvien.component';
import { CapnhatthongtinthanhvienComponent } from './thanhvien/capnhatthongtinthanhvien/capnhatthongtinthanhvien.component';
import { DanhsachmuonsachComponent } from './sach/danhsachmuonsach/danhsachmuonsach.component';
import { DanhsachtrasachComponent } from './sach/danhsachtrasach/danhsachtrasach.component';

const routes: Routes = [
  { 
    path : '',component : LoginComponent
  },
  { 
    path : 'Home',component : TrangchuComponent
  },
  { 
    path : 'Login',component : LoginComponent
  },
  { 
    path : 'Register',component : RegisterComponent
  },
  { 
    path : 'Register-member',component : RegisterMemberComponent
  },
  { 
    path : 'MemberTV',component : MemberTVComponent
  },
  { 
    path : 'Xoathanhvien',component : XoathanhvienComponent
  },
  { 
    path : 'Capnhatthongtinthanhvien',component : CapnhatthongtinthanhvienComponent
  },
  { 
    path : 'Sach',component : SachListComponent
  },
  { 
    path : 'Themsach',component : ThemsachComponent
  },
  { 
    path : 'Xoasach',component : XoasachComponent
  },
  { 
    path : 'Capnhatthongtinsach',component : CapnhatthongtinsachComponent
  },
  { 
    path : 'Muonsach',component : MuonsachComponent
  },
  { 
    path : 'DanhSachMuonSach',component : DanhsachmuonsachComponent
  },
  { 
    path : 'Trasach',component : TrasachComponent
  },
  { 
    path : 'DanhSachTraSach',component : DanhsachtrasachComponent
  },
  { 
    path : 'Report',component : ReportComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
