import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user = {
    nom: 'Jean Dupont',
    email: 'jean@example.com',
    telephone: '06 12 34 56 78',
    localisation: 'Bordeaux, France',
    certification: 'BRONZE',
    createdAt: new Date('2024-01-15'),
  };
}