import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingOpt3Component } from './saving-opt3.component';

describe('SavingOpt3Component', () => {
  let component: SavingOpt3Component;
  let fixture: ComponentFixture<SavingOpt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingOpt3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingOpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
