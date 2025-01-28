import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puntaje-ffinal',
  imports: [CommonModule, FormsModule],
  templateUrl: './puntaje-ffinal.component.html',
  styleUrl: './puntaje-ffinal.component.css'
})
export class PuntajeFFinalComponent {
  @Input() students: { name: string, grades: number[] }[] = [];

  calculateAverage(grades: number[]): number {
    return grades.length ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
  }
}

