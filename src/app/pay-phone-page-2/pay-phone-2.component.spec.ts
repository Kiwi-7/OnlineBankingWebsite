import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPhone2Component } from './pay-phone-2.component';

describe('TranferPhone2Component', () => {
  let component: PayPhone2Component;
  let fixture: ComponentFixture<PayPhone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPhone2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayPhone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
