import { TestBed } from '@angular/core/testing';

import { TraSachService } from './tra-sach.service';

describe('TraSachService', () => {
  let service: TraSachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraSachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
