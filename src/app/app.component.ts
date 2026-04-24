import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);
  
  sidebarOpen = false;
  userMenuOpen = false;
  
  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  
  get userName(): string {
    return this.authService.getCurrentUser()?.nom || 'Utilisateur';
  }
  
  get userInitials(): string {
    return this.userName.charAt(0).toUpperCase();
  }
  
  ngOnInit(): void {
    // Auto login for demo
    if (!this.isLoggedIn) {
      this.authService.login({ email: 'demo@sheepfarm.fr', password: 'demo' }).subscribe();
    }
  }
  
  logout(): void {
    this.authService.logout();
    this.userMenuOpen = false;
    window.location.reload();
  }
}