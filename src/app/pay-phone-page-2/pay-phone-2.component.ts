import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-phone-2',
  standalone: true,
  imports: [],
  templateUrl: './pay-phone-2.component.html',
  styleUrl: './pay-phone-2.component.css'
})
export class PayPhone2Component implements OnInit{
  rootAccount: string = "";
  providerName: string = "";
  providerService: string = ""; 
  phoneNumber: string = "";
  payAmount: string = "";

  constructor(private router: Router){}

  ngOnInit(): void {
    this.loadPayPhoneData();
  }

  loadPayPhoneData(): void {
    this.rootAccount = localStorage.getItem('rootAccount') || '';  
    this.providerName = localStorage.getItem('providerName') || ''; 
    this.providerService = localStorage.getItem('providerService') || '';
    this.phoneNumber = localStorage.getItem('phoneNumber') || '';
    this.payAmount = localStorage.getItem('payAmount') || '';
  }

  backPayPhone(): void {
    this.router.navigate(['pay-phone']);
  }

  toPayPhone3(): void {
    this.router.navigate(['pay-phone3']);
    localStorage.clear();
  }
}
