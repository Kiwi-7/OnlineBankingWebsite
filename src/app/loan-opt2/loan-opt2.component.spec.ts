import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOpt2Component } from './loan-opt2.component';

describe('LoanOpt2Component', () => {
  let component: LoanOpt2Component;
  let fixture: ComponentFixture<LoanOpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanOpt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanOpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
