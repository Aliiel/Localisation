import { TestBed } from '@angular/core/testing';

import { CoordonneesService } from './coordonnees.service';

describe('CoordonneesService', () => {
  let service: CoordonneesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordonneesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
