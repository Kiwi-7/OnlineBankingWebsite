import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving-main',
  standalone: true,
  imports: [],
  templateUrl: './saving-main.component.html',
  styleUrl: './saving-main.component.css'
})
export class SavingMainComponent {

  constructor(private router: Router){}

  Clicked(name: string): void{
    switch(name){
      case "loan1": this.router.navigate(['savingOpt1'])
      break;
      case "loan2": this.router.navigate(['savingOpt2'])
      break;
      case "loan3": this.router.navigate(['savingOpt3'])
      break;
      case "loan4": this.router.navigate(['savingOpt4'])
      break;
    }
  }
}
