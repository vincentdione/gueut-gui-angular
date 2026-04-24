import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './animal-list.component.html'
})
export class AnimalListComponent implements OnInit {
  @Input() animals: any[] = [];
  @Input() loading = false;

  searchQuery = '';
  filterBreed = '';
  filterStatus = '';
  filterGender = '';
  viewMode: 'grid' | 'list' = 'grid';

  defaultImage = 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop';

  breeds = ['Mérinos', 'Charolais', 'Solognot', 'Berrichon', 'Blackface', 'Texel'];

  ngOnInit(): void {
    if (!this.animals?.length) {
      this.animals = [
        { id: '1', nom: 'Belle', race: 'Mérinos', dateNaiss: new Date('2023-04-15'), sexe: 'F', poids: 65, aVente: true, imageUrl: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop' },
        { id: '2', nom: 'Léon', race: 'Charolais', dateNaiss: new Date('2022-08-20'), sexe: 'M', poids: 85, aVente: false, imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae290347b7?w=400&h=300&fit=crop' },
        { id: '3', nom: 'Emma', race: 'Solognot', dateNaiss: new Date('2024-01-10'), sexe: 'F', poids: 58, aVente: true, imageUrl: 'https://images.unsplash.com/photo-1507806181058-9f42a63d617e?w=400&h=300&fit=crop' },
        { id: '4', nom: 'Max', race: 'Berrichon', dateNaiss: new Date('2023-11-05'), sexe: 'M', poids: 72, aVente: false, imageUrl: 'https://images.unsplash.com/photo-1553279768-865429f1b013?w=400&h=300&fit=crop' },
        { id: '5', nom: 'Noir', race: 'Blackface', dateNaiss: new Date('2023-06-18'), sexe: 'M', poids: 78, aVente: true, imageUrl: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop' },
        { id: '6', nom: 'Blanche', race: 'Texel', dateNaiss: new Date('2024-02-22'), sexe: 'F', poids: 55, aVente: false, imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae290347b7?w=400&h=300&fit=crop' },
        { id: '7', nom: 'Roi', race: 'Mérinos', dateNaiss: new Date('2022-12-01'), sexe: 'M', poids: 92, aVente: false, imageUrl: 'https://images.unsplash.com/photo-1484557985045-ecf31653c9fe?w=400&h=300&fit=crop' },
        { id: '8', nom: 'Duchesse', race: 'Charolais', dateNaiss: new Date('2023-09-10'), sexe: 'F', poids: 68, aVente: true, imageUrl: 'https://images.unsplash.com/photo-1507806181058-9f42a63d617e?w=400&h=300&fit=crop' },
      ];
    }
  }

  get filteredAnimals(): any[] {
    return this.animals.filter(a => {
      const matchesSearch = !this.searchQuery || a.nom.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesBreed = !this.filterBreed || a.race === this.filterBreed;
      const matchesStatus = !this.filterStatus || (this.filterStatus === 'aVente' ? a.aVente : !a.aVente);
      const matchesGender = !this.filterGender || a.sexe === this.filterGender;
      return matchesSearch && matchesBreed && matchesStatus && matchesGender;
    });
  }
}