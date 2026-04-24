import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  
  @Input() recentAnimals: any[] = [];
  
  defaultImage = 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop';
  
  get userName(): string {
    return this.authService.getCurrentUser()?.nom || 'Éleveur';
  }
  
  stats = {
    total: 42,
    breeding: 15,
    forSale: 8
  };
  
  ngOnInit(): void {
    // Demo animals if none provided
    if (!this.recentAnimals?.length) {
      this.recentAnimals = [
        { id: '1', nom: 'Belle', race: 'Mérinos', dateNaiss: new Date('2023-04-15'), sexe: 'F', aVente: true, imageUrl: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop' },
        { id: '2', nom: 'Léon', race: 'Charolais', dateNaiss: new Date('2022-08-20'), sexe: 'M', aVente: false, imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae290347b7?w=400&h=300&fit=crop' },
        { id: '3', nom: 'Emma', race: 'Solognot', dateNaiss: new Date('2024-01-10'), sexe: 'F', aVente: true, imageUrl: 'https://images.unsplash.com/photo-1507806181058-9f42a63d617e?w=400&h=300&fit=crop' },
        { id: '4', nom: 'Max', race: 'Berrichon', dateNaiss: new Date('2023-11-05'), sexe: 'M', aVente: false, imageUrl: 'https://images.unsplash.com/photo-1553279768-865429f1b013?w=400&h=300&fit=crop' },
      ];
    }
  }
}