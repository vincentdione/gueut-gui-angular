import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.scss',
})
export class AnimalFormComponent {
  formData = {
    nom: '',
    race: '',
    sexe: '',
    couleur: '',
    poidsKg: null as number | null,
    dateNaissance: '',
  };

  races = [
    { value: 'ILE_DE_FRANCE', label: 'Ile de France' },
    { value: 'TEXEL', label: 'Texel' },
    { value: 'CHAROLLAIS', label: 'Charollais' },
    { value: 'ROMANOV', label: 'Romanov' },
    { value: 'SUFFOLK', label: 'Suffolk' },
    { value: 'BLACKFACE', label: 'Blackface' },
    { value: 'AUTRE', label: 'Autre' },
  ];

  sexes = [
    { value: 'M', label: 'Mâle' },
    { value: 'F', label: 'Femelle' },
  ];

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
  }
}