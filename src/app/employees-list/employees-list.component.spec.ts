import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine legal department as yellow', () => {
    expect(component.departmentClass('Legal')).toBe(
      'bg-yellow-100 text-yellow-800'
    );
  });

  it('should determine HR department as red', () => {
    expect(component.departmentClass('HR')).toBe('bg-red-100 text-red-800');
  });

  it('should determine Marketing department as cyan', () => {
    expect(component.departmentClass('Marketing')).toBe(
      'bg-cyan-100 text-cyan-800'
    );
  });

  it('should determine unknown as slate', () => {
    expect(component.departmentClass('some other one')).toBe(
      'bg-slate-100 text-slate-800'
    );
  });
});
