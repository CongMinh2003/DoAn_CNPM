import { TestBed } from '@angular/core/testing';

import { BaocaoService } from './baocao.service';

describe('BaocaoService', () => {
  let service: BaocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
