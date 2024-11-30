import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front_end';

  @ViewChild(MatSidenav) sidenav! : MatSidenav;

// public isOpend = false;
public isOpend = false;


public openLeftSide() {
  this.isOpend = !this.isOpend;
  this.sidenav.toggle();
}

public closeLeftSide() {
  this.isOpend = false;
  if (this.sidenav) {
    this.sidenav.close();
  }
}

}
