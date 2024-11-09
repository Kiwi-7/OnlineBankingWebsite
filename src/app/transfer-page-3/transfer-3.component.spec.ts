import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transfer3Component } from './transfer-3.component';

describe('Transfer3Component', () => {
  let component: Transfer3Component;
  let fixture: ComponentFixture<Transfer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transfer3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Transfer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
