import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPhoneComponent } from './pay-phone.component';

describe('TranferPhoneComponent', () => {
  let component: PayPhoneComponent;
  let fixture: ComponentFixture<PayPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
