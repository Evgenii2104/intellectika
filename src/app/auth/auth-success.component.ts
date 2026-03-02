import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrapper">
      <p>Authorizing...</p>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;
    }
  `]
})
export class AuthSuccessComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      localStorage.setItem('access_token', token);
      this.router.navigate(['/app/chat']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
