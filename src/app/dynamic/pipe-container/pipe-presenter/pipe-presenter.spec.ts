import { TestBed } from '@angular/core/testing';

import { PipePresenter } from './pipe-presenter';

describe('PipePresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PipePresenter = TestBed.get(PipePresenter);
    expect(service).toBeTruthy();
  });
});
