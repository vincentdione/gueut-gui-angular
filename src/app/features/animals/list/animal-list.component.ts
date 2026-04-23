import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss',
})
export class AnimalListComponent {
  animals: any[] = [];
  loading = false;
}