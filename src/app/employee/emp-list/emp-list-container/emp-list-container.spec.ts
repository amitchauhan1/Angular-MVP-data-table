import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListContainerComponent } from './emp-list-container';

describe('EmpListContainerComponent', () => {
  let component: EmpListContainerComponent;
  let fixture: ComponentFixture<EmpListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
