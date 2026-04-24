import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal-detail.component.html'
})
export class AnimalDetailComponent {
  activeTab: 'info' | 'genealogy' | 'health' = 'info';
  
  animal = {
    id: '1234',
    nom: 'Belle',
    race: 'Mérinos',
    dateNaiss: new Date('2022-03-15'),
    createdAt: new Date('2022-03-20'),
    updatedAt: new Date('2024-01-10'),
    sexe: 'F' as 'M' | 'F',
    poids: 65,
    aVente: true,
    description: 'Belle mérinos élevée avec soin depuis sa naissance. Excellente génétique pour la reproduction. Temperament calme, facile à manipuler.',
    imageUrl: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=600&h=600&fit=crop',
    pere: 'Prince',
    mere: 'Duchesse'
  };

  healthEvents = [
    { date: new Date('2024-01-15'), type: 'checkup', title: 'Visite médicale générale', icon: '🩺' },
    { date: new Date('2023-12-01'), type: 'vaccin', title: 'Vaccination DTP', icon: '💉' },
    { date: new Date('2023-11-15'), type: 'poids', title: 'Pesée: 65 kg', icon: '⚖️' },
  ];

  getAge(): number {
    const today = new Date();
    const birthDate = new Date(this.animal.dateNaiss);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}