import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './charity.component.html',
  styleUrl: './charity.component.css'
})
export class CharityComponent {
  charityForm: FormGroup;

  constructor(private cf: FormBuilder, private router: Router) {
    this.charityForm = this.cf.group({
      rootAccount: [''], 
      rootMoney: [''],
      charityName: [''],
      receiverName: [''],
      receiverAddress: [''],
      receiverCondition: [''],
      receivedMoney: [''],
    })
  }

  saveCharityData(): void {
    localStorage.setItem('rootAccount', this.charityForm.get('rootAccount')?.value);
    localStorage.setItem('rootMoney', this.charityForm.get('rootMoney')?.value);
    localStorage.setItem('charityName', this.charityForm.get('charityName')?.value);
    localStorage.setItem('receiverName', this.charityForm.get('receiverName')?.value);
    localStorage.setItem('receiverAddress', this.charityForm.get('receiverAddress')?.value);
    localStorage.setItem('receiverCondition', this.charityForm.get('receiverCondition')?.value);
    localStorage.setItem('receivedMoney', this.charityForm.get('receivedMoney')?.value);
  }

  toCharity2() {
    this.saveCharityData();
    this.charityForm.reset();
    this.router.navigate(['charity-2']);
  }
}
