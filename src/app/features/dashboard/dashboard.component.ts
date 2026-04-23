import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private authService = inject(AuthService);

  get userName(): string {
    return this.authService.getCurrentUser()?.nom || 'Utilisateur';
  }

  stats = [
    { icon: '🐑', label: 'Animaux', value: 0, color: '#007bff' },
    { icon: '📋', label: 'En vente', value: 0, color: '#28a745' },
    { icon: '💬', label: 'Messages', value: 0, color: '#ffc107' },
    { icon: '🏆', label: 'Ventes', value: 0, color: '#6f42c1' },
  ];
}