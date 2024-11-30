import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoathanhvienComponent } from './xoathanhvien.component';

describe('XoathanhvienComponent', () => {
  let component: XoathanhvienComponent;
  let fixture: ComponentFixture<XoathanhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XoathanhvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoathanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
