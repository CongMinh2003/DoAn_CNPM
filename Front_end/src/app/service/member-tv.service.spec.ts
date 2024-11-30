import { TestBed } from '@angular/core/testing';

import { MemberTVService } from './member-tv.service';

describe('MemberTVService', () => {
  let service: MemberTVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberTVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
