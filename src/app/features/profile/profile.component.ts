import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user = {
    nom: 'Jean Dupont',
    email: 'jean@example.com',
    telephone: '06 12 34 56 78',
    localisation: 'Beauce, France',
    certification: 'Premium',
    createdAt: new Date('2024-01-15'),
  };
  
  stats = {
    totalAnimals: 42,
    totalSales: 156,
    rating: 4.8,
    reviews: 240
  };
}