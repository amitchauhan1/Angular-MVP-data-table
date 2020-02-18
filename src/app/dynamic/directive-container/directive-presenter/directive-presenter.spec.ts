import { TestBed } from '@angular/core/testing';

import { DirectivePresenter } from './directive-presenter';

describe('DirectivePresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectivePresenter = TestBed.get(DirectivePresenter);
    expect(service).toBeTruthy();
  });
});
