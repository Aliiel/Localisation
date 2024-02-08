import { TestBed } from '@angular/core/testing';

import { CodePostalService } from './code-postal.service';

describe('CodePostalService', () => {
  let service: CodePostalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePostalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
