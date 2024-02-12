import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBillingComponent } from './calculate-billing.component';

describe('CalculateBillingComponent', () => {
  let component: CalculateBillingComponent;
  let fixture: ComponentFixture<CalculateBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateBillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
