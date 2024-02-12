import { Component } from '@angular/core';

interface Customer {
  customerNumber: string;
  customerName: string;
  dob: Date;
  address: string;
  pinCode: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customerNumber: string = '';
  customerName: string = '';
  dob: Date = new Date('1990-01-01');
  address: string = '';
  pinCode: string = '';
  customers: Customer[] = [];


  addCustomer() {
    if (this.customerNumber && this.customerName && this.dob && this.address && this.pinCode) {
      const newCustomer: Customer = {
        customerNumber: this.customerNumber,
        customerName: this.customerName,
        dob: this.dob,
        address: this.address,
        pinCode: this.pinCode
      };
      this.customers.push(newCustomer);
      console.log(newCustomer);
    }
  }

  clearForm() {
    this.customerNumber = '';
    this.customerName = '';
    this.dob = new Date('1990-01-01');
    this.address = '';
    this.pinCode = '';
  }

  deleteCustomer(customer: Customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }
}
