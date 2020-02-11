import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListPrasenetationComponent } from './emp-list-prasenetation';

describe('EmpListPrasenetationComponent', () => {
  let component: EmpListPrasenetationComponent;
  let fixture: ComponentFixture<EmpListPrasenetationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListPrasenetationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListPrasenetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
