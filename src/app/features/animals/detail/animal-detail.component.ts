import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal-detail.component.html',
  styleUrl: './animal-detail.component.scss',
})
export class AnimalDetailComponent {
  animal: any = null;
}