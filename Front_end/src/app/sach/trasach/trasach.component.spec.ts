import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasachComponent } from './trasach.component';

describe('TrasachComponent', () => {
  let component: TrasachComponent;
  let fixture: ComponentFixture<TrasachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrasachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
