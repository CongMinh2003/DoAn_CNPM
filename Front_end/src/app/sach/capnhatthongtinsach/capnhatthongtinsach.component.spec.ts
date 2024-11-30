import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatthongtinsachComponent } from './capnhatthongtinsach.component';

describe('CapnhatthongtinsachComponent', () => {
  let component: CapnhatthongtinsachComponent;
  let fixture: ComponentFixture<CapnhatthongtinsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapnhatthongtinsachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapnhatthongtinsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
