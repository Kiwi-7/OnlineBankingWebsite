import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  isVisible: boolean = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['home']);
      alert('Login success!');
    } else {
      alert('Invalid username or password');
    }
  }

  onMouseEnter() {
    this.isVisible = true;
  }

  onMouseLeave() {
    this.isVisible = false;
  }

  refreshCaptcha() {
    
  }
}
