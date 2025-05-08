import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingOpt1Component } from './saving-opt1.component';

describe('SavingOpt1Component', () => {
  let component: SavingOpt1Component;
  let fixture: ComponentFixture<SavingOpt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingOpt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingOpt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
