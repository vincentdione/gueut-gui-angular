import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marketplace.component.html'
})
export class MarketplaceComponent {
  searchQuery = '';
  maxPrice = 5000;
  
  defaultImage = 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=400&fit=crop';
  
  listings = [
    { id: '1', name: 'Belle', breed: 'Mérinos', price: 1200, image: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=400&fit=crop', location: 'Beauce', breeder: 'La Vallée', rating: 5, reviews: 12 },
    { id: '2', name: 'Léon', breed: 'Charolais', price: 950, image: 'https://images.unsplash.com/photo-1518717758536-85ae290347b7?w=400&h=400&fit=crop', location: 'Périgord', breeder: 'Ferme Marie', rating: 4, reviews: 8 },
    { id: '3', name: 'Emma', breed: 'Solognot', price: 1500, image: 'https://images.unsplash.com/photo-1507806181058-9f42a63d617e?w=400&h=400&fit=crop', location: 'Limousin', breeder: 'Élevage Pierre', rating: 5, reviews: 3 },
    { id: '4', name: 'Max', breed: 'Berrichon', price: 850, image: 'https://images.unsplash.com/photo-1553279768-865429f1b013?w=400&h=400&fit=crop', location: 'Loire', breeder: 'Ferme Bio', rating: 4, reviews: 15 },
    { id: '5', name: 'Noir', breed: 'Blackface', price: 1100, image: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=400&fit=crop', location: 'Ariège', breeder: 'Montagne', rating: 5, reviews: 6 },
    { id: '6', name: 'Blanche', breed: 'Texel', price: 1300, image: 'https://images.unsplash.com/photo-1518717758536-85ae290347b7?w=400&h=400&fit=crop', location: 'Alsace', breeder: 'Domaine Blanc', rating: 4, reviews: 9 }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}