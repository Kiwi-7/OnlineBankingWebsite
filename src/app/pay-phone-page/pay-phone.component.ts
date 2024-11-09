import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-phone',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay-phone.component.html',
  styleUrl: './pay-phone.component.css'
})
export class PayPhoneComponent {
  payPhoneForm: FormGroup

  constructor(private ppf: FormBuilder, private router: Router){
    this.payPhoneForm = this.ppf.group({
      rootAccount: [''],
      rootMoney: [''],
      providerName: [''],
      providerService: [''], 
      phoneNumber: [''],
      payAmount: [''],
    });
  }

  savePayPhoneData(): void {
    localStorage.setItem('rootAccount', this.payPhoneForm.get('rootAccount')?.value);
    localStorage.setItem('rootMoney', this.payPhoneForm.get('rootMoney')?.value);
    localStorage.setItem('providerName', this.payPhoneForm.get('providerName')?.value);
    localStorage.setItem('providerService', this.payPhoneForm.get('providerService')?.value);
    localStorage.setItem('phoneNumber', this.payPhoneForm.get('phoneNumber')?.value);
    localStorage.setItem('payAmount', this.payPhoneForm.get('payAmount')?.value);
  }

  toPayPhone2(){
    this.savePayPhoneData();
    this.payPhoneForm.reset(); 
    this.router.navigate(['pay-phone2']);
  }
}
