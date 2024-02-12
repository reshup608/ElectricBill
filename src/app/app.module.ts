import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CalculateBillingComponent } from './calculate-billing/calculate-billing.component';
import { ViewBillPaymentComponent } from './view-bill-payment/view-bill-payment.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent,
    AddCustomerComponent,
    CalculateBillingComponent,
    ViewBillPaymentComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
