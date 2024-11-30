import { TestBed } from '@angular/core/testing';

import { SachService } from './sach.service';

describe('SachService', () => {
  let service: SachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
