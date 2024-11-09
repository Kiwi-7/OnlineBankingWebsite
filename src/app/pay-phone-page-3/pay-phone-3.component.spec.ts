import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPhone3Component } from './pay-phone-3.component';

describe('TranferPhone3Component', () => {
  let component: PayPhone3Component;
  let fixture: ComponentFixture<PayPhone3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPhone3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayPhone3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
