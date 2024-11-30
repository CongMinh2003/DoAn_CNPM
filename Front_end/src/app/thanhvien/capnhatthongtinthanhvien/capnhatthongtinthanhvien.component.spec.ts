import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatthongtinthanhvienComponent } from './capnhatthongtinthanhvien.component';

describe('CapnhatthongtinthanhvienComponent', () => {
  let component: CapnhatthongtinthanhvienComponent;
  let fixture: ComponentFixture<CapnhatthongtinthanhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapnhatthongtinthanhvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapnhatthongtinthanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
