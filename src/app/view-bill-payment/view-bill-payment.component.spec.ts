import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillPaymentComponent } from './view-bill-payment.component';

describe('ViewBillPaymentComponent', () => {
  let component: ViewBillPaymentComponent;
  let fixture: ComponentFixture<ViewBillPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBillPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBillPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
