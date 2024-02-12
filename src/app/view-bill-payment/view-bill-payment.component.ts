import { Component } from '@angular/core';

@Component({
  selector: 'app-view-bill-payment',
  templateUrl: './view-bill-payment.component.html',
  styleUrl: './view-bill-payment.component.css'
})
export class ViewBillPaymentComponent {
  // Sample data (Replace with your actual data)
  billPayments: any[] = [
    // Sample bill payment objects
    {
      customerNo: '001',
      customerName: 'John Doe',
      dob: '1990-01-01',
      address: '123 Main St',
      pinCode: '12345',
      monthName: 'January',
      numberOfUnits: 100,
      billAmount: 500
    },
    {
      customerNo: '002',
      customerName: 'Sanchayita kumar',
      dob: '1990-01-01',
      address: '123 Main St',
      pinCode: '12345',
      monthName: 'January',
      numberOfUnits: 100,
      billAmount: 1000
    },
    {
      customerNo: '003',
      customerName: 'Reshu Prajapati',
      dob: '1990-01-01',
      address: '123 Main St',
      pinCode: '12345',
      monthName: 'January',
      numberOfUnits: 100,
      billAmount: 1200
    },
    // Add more bill payment objects as needed
  ];

  filteredData: any[] = [];
  searchText: string = '';

  constructor() {
    // Initialize filteredData with the initial data
    this.filteredData = this.billPayments;
  }

}
