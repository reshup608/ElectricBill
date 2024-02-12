import { Component } from '@angular/core';

interface BillingRecord {
  customerName: string;
  monthName: string;
  numberOfUnits: number;
  billAmount: number;
}

@Component({
  selector: 'app-calculate-billing',
  templateUrl: './calculate-billing.component.html',
  styleUrls: ['./calculate-billing.component.css']
})
export class CalculateBillingComponent {
  customers: string[] = ['Sanchayita Kumar','John Maker','Loofi Singh'];
  selectedCustomer: string = '';
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  selectedMonth: string = '';
  numberOfUnits: number = 0;
  billAmount: number = 0;
  billingRecords: BillingRecord[] = [];


  calculateBill() {

    if (this.numberOfUnits >= 1 && this.numberOfUnits <= 100) {
      this.billAmount = this.numberOfUnits * 0; // Replace 0 with actual rate as per your requirement
    } else if (this.numberOfUnits >= 101 && this.numberOfUnits <= 400) {
      this.billAmount = this.numberOfUnits * 4.5;
    }else if (this.numberOfUnits >= 401 && this.numberOfUnits <= 500) {
      this.billAmount = this.numberOfUnits * 6;
    }else if (this.numberOfUnits >= 501 && this.numberOfUnits <= 600) {
      this.billAmount = this.numberOfUnits * 8;
    }else if (this.numberOfUnits >= 601 && this.numberOfUnits <= 800) {
      this.billAmount = this.numberOfUnits * 9;
    }else if (this.numberOfUnits >= 801 && this.numberOfUnits <= 1000) {
      this.billAmount = this.numberOfUnits * 10;
    }else if (this.numberOfUnits > 1001) {
      this.billAmount = this.numberOfUnits * 11;
    } // ... continue with other slab rates

    // Add record to billingRecords array
    if (this.selectedCustomer && this.selectedMonth && this.numberOfUnits && this.billAmount !== null) {
      const newRecord: BillingRecord = {
        customerName: this.selectedCustomer, // Replace with selected customer name
        monthName: this.selectedMonth,
        numberOfUnits: this.numberOfUnits,
        billAmount: this.billAmount
      };
      this.billingRecords.push(newRecord);
    }
  }

  clearForm() {
    this.selectedCustomer = '';
    this.selectedMonth = '';
    this.numberOfUnits = 0;
    this.billAmount = 0;
  }
}
