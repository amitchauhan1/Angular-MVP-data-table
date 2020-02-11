import { TestBed } from '@angular/core/testing';

import { EmpListPresenterService } from './emp-list-presenter';

describe('EmpListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpListPresenterService = TestBed.get(EmpListPresenterService);
    expect(service).toBeTruthy();
  });
});
