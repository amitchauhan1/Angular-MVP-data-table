import { TestBed } from '@angular/core/testing';

import { EmployeeFormPresentorService } from './employee-form-presenter';

describe('EmployeeFormPresentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFormPresentorService = TestBed.get(EmployeeFormPresentorService);
    expect(service).toBeTruthy();
  });
});
