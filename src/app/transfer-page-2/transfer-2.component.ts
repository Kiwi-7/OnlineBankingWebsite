import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-2',
  standalone: true,
  imports: [],
  templateUrl: './transfer-2.component.html',
  styleUrl: './transfer-2.component.css'
})
export class Transfer2Component implements OnInit{
  rootAccount: string = '';
  rootMoney: string = ''; 
  bankName: string = '';
  receiverName: string = '';
  receiverAccount: string = ''; 
  receivedMoney: string = '';
  context: string = '';
  transferFee: number = 5000;

  constructor (private router: Router) {}

  ngOnInit(): void { 
    this.loadTransferData(); 
  }

  loadTransferData(): void { 
    this.rootAccount = localStorage.getItem('rootAccount') || ''; 
    this.rootMoney = localStorage.getItem('rootMoney') || ''; 
    this.bankName = localStorage.getItem('bankName') || ''; 
    this.receiverAccount = localStorage.getItem('receiverAccount') || '';
    this.receivedMoney = localStorage.getItem('receivedMoney') || '';
    this.context = localStorage.getItem('context') || '';
  }
  
  backToTransfer(): void {
    this.router.navigate(['transfer']);
  }

  toTransfer3(): void {
    this.router.navigate(['transfer-3']);
    localStorage.clear();
  }
}
