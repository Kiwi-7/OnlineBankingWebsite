import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingOpt2Component } from './saving-opt2.component';

describe('SavingOpt2Component', () => {
  let component: SavingOpt2Component;
  let fixture: ComponentFixture<SavingOpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingOpt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingOpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
