import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeContainer } from './pipe-container';

describe('PipeContainer', () => {
  let component: PipeContainer;
  let fixture: ComponentFixture<PipeContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
