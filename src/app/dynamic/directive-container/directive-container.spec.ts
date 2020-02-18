import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveContainer } from './directive-container';

describe('DirectiveContainer', () => {
  let component: DirectiveContainer;
  let fixture: ComponentFixture<DirectiveContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
