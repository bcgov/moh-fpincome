import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpaEnvService } from './spa-env.service';

describe('SpaEnvService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: SpaEnvService = TestBed.get(SpaEnvService);
    expect(service).toBeTruthy();
  });
});
