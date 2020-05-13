import { TestBed } from '@angular/core/testing';

import { SplunkLoggingService } from './splunk-logging.service';

describe('SplunkLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplunkLoggingService = TestBed.get(SplunkLoggingService);
    expect(service).toBeTruthy();
  });
});
