import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachListComponent } from './sach-list.component';

describe('SachListComponent', () => {
  let component: SachListComponent;
  let fixture: ComponentFixture<SachListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SachListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
