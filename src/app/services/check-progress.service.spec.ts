import { TestBed } from '@angular/core/testing';

import { CheckProgressService } from './check-progress.service';

describe('CheckProgressService', () => {
  let service: CheckProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
