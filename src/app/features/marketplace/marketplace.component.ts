import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss',
})
export class MarketplaceComponent {
  searchQuery = '';
  selectedRace = '';
  selectedSexe = '';

  races = [
    { value: '', label: 'Toutes les races' },
    { value: 'ILE_DE_FRANCE', label: 'Ile de France' },
    { value: 'TEXEL', label: 'Texel' },
    { value: 'CHAROLLAIS', label: 'Charollais' },
    { value: 'ROMANOV', label: 'Romanov' },
    { value: 'SUFFOLK', label: 'Suffolk' },
    { value: 'BLACKFACE', label: 'Blackface' },
    { value: 'AUTRE', label: 'Autre' },
  ];

  sexes = [
    { value: '', label: 'Tous sexes' },
    { value: 'M', label: 'Mâle' },
    { value: 'F', label: 'Femelle' },
  ];
}