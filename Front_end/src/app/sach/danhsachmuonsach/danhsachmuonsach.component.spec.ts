import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachmuonsachComponent } from './danhsachmuonsach.component';

describe('DanhsachmuonsachComponent', () => {
  let component: DanhsachmuonsachComponent;
  let fixture: ComponentFixture<DanhsachmuonsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanhsachmuonsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhsachmuonsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
