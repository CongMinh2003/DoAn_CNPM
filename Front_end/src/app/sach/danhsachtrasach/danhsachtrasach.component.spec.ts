import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachtrasachComponent } from './danhsachtrasach.component';

describe('DanhsachtrasachComponent', () => {
  let component: DanhsachtrasachComponent;
  let fixture: ComponentFixture<DanhsachtrasachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanhsachtrasachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhsachtrasachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
