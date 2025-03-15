import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Thêm module này
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { RegisterMemberComponent } from './thanhvien/register-member/register-member.component';
import { MemberTVComponent } from './thanhvien/member-tv/member-tv.component';
import { SachListComponent } from './sach/sach-list/sach-list.component';
import { ReportComponent } from './report/report.component';

// Import các module Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ThemsachComponent } from './sach/themsach/themsach.component';
import { XoasachComponent } from './sach/xoasach/xoasach.component';
import { CapnhatthongtinsachComponent } from './sach/capnhatthongtinsach/capnhatthongtinsach.component';
import { MuonsachComponent } from './sach/muonsach/muonsach.component';
import { TrasachComponent } from './sach/trasach/trasach.component';
import { XoathanhvienComponent } from './thanhvien/xoathanhvien/xoathanhvien.component';
import { CapnhatthongtinthanhvienComponent } from './thanhvien/capnhatthongtinthanhvien/capnhatthongtinthanhvien.component';
import { DanhsachmuonsachComponent } from './sach/danhsachmuonsach/danhsachmuonsach.component';
import { DanhsachtrasachComponent } from './sach/danhsachtrasach/danhsachtrasach.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrangchuComponent,
    RegisterMemberComponent,
    MemberTVComponent,
    SachListComponent,
    ReportComponent,
    ThemsachComponent,
    XoasachComponent,
    CapnhatthongtinsachComponent,
    MuonsachComponent,
    TrasachComponent,
    XoathanhvienComponent,
    CapnhatthongtinthanhvienComponent,
    DanhsachmuonsachComponent,
    DanhsachtrasachComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
