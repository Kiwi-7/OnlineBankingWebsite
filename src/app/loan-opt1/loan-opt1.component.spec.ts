import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOpt1Component } from './loan-opt1.component';

describe('LoanOpt1Component', () => {
  let component: LoanOpt1Component;
  let fixture: ComponentFixture<LoanOpt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanOpt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanOpt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
