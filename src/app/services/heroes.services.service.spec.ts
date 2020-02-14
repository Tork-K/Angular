import { TestBed } from '@angular/core/testing';

import { Heroes.ServicesService } from './heroes.services.service';

describe('Heroes.ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Heroes.ServicesService = TestBed.get(Heroes.ServicesService);
    expect(service).toBeTruthy();
  });
});
