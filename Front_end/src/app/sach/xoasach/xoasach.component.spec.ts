import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoasachComponent } from './xoasach.component';

describe('XoasachComponent', () => {
  let component: XoasachComponent;
  let fixture: ComponentFixture<XoasachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XoasachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoasachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
