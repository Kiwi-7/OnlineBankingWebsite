import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OTPSServiceService {

  constructor() { }

  createOTPCode(length: number): void{
    let result = ''; 
    const characters = '0123456789'; 
    const charactersLength = characters.length; 
    for (let i = 0; i < length; i++) { 
      result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
    } 
    console.log(result);
  }
}
