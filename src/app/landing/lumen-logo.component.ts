import { Component } from '@angular/core';

@Component({
  selector: 'app-lumen-logo',
  standalone: true,
  template: `
    <div class="logo">
      <div class="icon"></div>
      <span>Lumen</span>
    </div>
  `,
  styles: [`
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    .icon {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: linear-gradient(135deg, #4c6fff, #8f5cff);
      box-shadow: 0 4px 20px rgba(76,111,255,0.4);
    }
  `]
})
export class LumenLogoComponent {}
