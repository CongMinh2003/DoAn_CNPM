import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTVComponent } from './member-tv.component';

describe('MemberTVComponent', () => {
  let component: MemberTVComponent;
  let fixture: ComponentFixture<MemberTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberTVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
