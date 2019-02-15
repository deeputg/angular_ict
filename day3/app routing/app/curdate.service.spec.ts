import { TestBed } from '@angular/core/testing';

import { CurdateService } from './curdate.service';

describe('CurdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurdateService = TestBed.get(CurdateService);
    expect(service).toBeTruthy();
  });
});
