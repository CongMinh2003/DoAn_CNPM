import { TestBed } from '@angular/core/testing';

import { MuonSachService } from './muon-sach.service';

describe('MuonSachService', () => {
  let service: MuonSachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuonSachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
