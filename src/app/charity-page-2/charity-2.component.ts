import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity-2',
  standalone: true,
  imports: [],
  templateUrl: './charity-2.component.html',
  styleUrl: './charity-2.component.css'
})
export class Charity2Component implements OnInit{
  rootAccount: string = "";
  charityName: string = "";
  receiverName: string = "";
  receiverAddress: string = "";
  receiverCondition: string = "";
  receivedMoney: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCharityData();
  }

  loadCharityData(): void {
    this.rootAccount = localStorage.getItem("rootAccount") || '';
    this.charityName = localStorage.getItem("charityName") || '';
    this.receiverName= localStorage.getItem("receiverName") || '';
    this.receiverAddress = localStorage.getItem("receiverAddress") || '';
    this.receiverCondition = localStorage.getItem("receiverCondition") || '';
    this.receivedMoney = localStorage.getItem("receivedMoney") || '';
  }

  backToCharity() {
    this.router.navigate(["charity"]);
  }

  toCharity3() {
    this.router.navigate(["charity-3"]);
    localStorage.clear();
  }
}
