import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charity2Component } from './charity-2.component';

describe('Charity2Component', () => {
  let component: Charity2Component;
  let fixture: ComponentFixture<Charity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Charity2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Charity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
