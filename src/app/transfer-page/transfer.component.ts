import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent {
  transferForm: FormGroup;

  constructor(private tf: FormBuilder, private router: Router) { 
    this.transferForm = this.tf.group({ 
      rootAccount: ['1022384749'],
      rootMoney: [''],
      bankName: ['Vietcombank'],
      receiverAccount: [''], 
      receivedMoney: [''],
      context: [''],
    }); 
  }

  saveTransferData(): void { 
    localStorage.setItem('rootAccount', this.transferForm.get('rootAccount')?.value); 
    localStorage.setItem('rootMoney', this.transferForm.get('rootMoney')?.value); 
    localStorage.setItem('bankName', this.transferForm.get('bankName')?.value);
    localStorage.setItem('receiverAccount', this.transferForm.get('receiverAccount')?.value); 
    localStorage.setItem('receivedMoney', this.transferForm.get('receivedMoney')?.value);
    localStorage.setItem('context', this.transferForm.get('context')?.value);
  }

  /*loadFormData(): void { 
    const name = localStorage.getItem('name'); 
    const email = localStorage.getItem('email'); 
    const message = localStorage.getItem('message'); 
    this.form.patchValue({ 
      name: name ? name : '', 
      email: email ? email : '', 
      message: message ? message : '' 
    }); 
  }*/

  toCharity2() {
    this.saveTransferData();
    this.transferForm.reset(); 
    this.router.navigate(['transfer-2']);
  }
}
