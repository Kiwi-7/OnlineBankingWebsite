import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transfer2Component } from './transfer-2.component';

describe('TranferBank2Component', () => {
  let component: Transfer2Component;
  let fixture: ComponentFixture<Transfer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transfer2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Transfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
