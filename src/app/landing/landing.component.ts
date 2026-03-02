import { Component, inject } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LumenLogoComponent } from './lumen-logo.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, LumenLogoComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  private router = inject(Router);

  loginWithEmail() {
    this.router.navigate(['/register']);
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google';
  }

  loginWithApple() {
    window.location.href = 'http://localhost:3000/auth/apple';
  }
}
