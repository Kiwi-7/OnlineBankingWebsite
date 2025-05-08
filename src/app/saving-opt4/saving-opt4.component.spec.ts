import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingOpt4Component } from './saving-opt4.component';

describe('SavingOpt4Component', () => {
  let component: SavingOpt4Component;
  let fixture: ComponentFixture<SavingOpt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingOpt4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingOpt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
