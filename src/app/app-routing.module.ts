import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CalculateBillingComponent } from './calculate-billing/calculate-billing.component';
import { ViewBillPaymentComponent } from './view-bill-payment/view-bill-payment.component';

const routes: Routes = [
{ path: '', component: VerticalMenuComponent },
{ path: 'add-customer', component: AddCustomerComponent },
  { path: 'calculate-billing', component: CalculateBillingComponent },
  { path: 'view-bill-payment', component: ViewBillPaymentComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
