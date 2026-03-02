import { Routes } from '@angular/router';
import {AuthComponent} from './auth/auth.component.';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component')
        .then(m => m.LandingComponent)
  },
  {
    path: 'auth-success',
    loadComponent: () =>
      import('./auth/auth-success.component')
        .then(m => m.AuthSuccessComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/auth.component.')
        .then(m => m.AuthComponent)
  }
];
