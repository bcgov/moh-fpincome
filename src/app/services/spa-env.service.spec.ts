import { TestBed } from '@angular/core/testing';

import { SpaEnvService } from './spa-env.service';

describe('SpaEnvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaEnvService = TestBed.get(SpaEnvService);
    expect(service).toBeTruthy();
  });
});
