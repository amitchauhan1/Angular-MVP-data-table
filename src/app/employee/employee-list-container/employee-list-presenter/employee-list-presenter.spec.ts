import { TestBed } from '@angular/core/testing';

import { EmployeeListPresenter } from './employee-list-presenter';

describe('EmployeeListPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeListPresenter = TestBed.get(EmployeeListPresenter);
    expect(service).toBeTruthy();
  });
});
