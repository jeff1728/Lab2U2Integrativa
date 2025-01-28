import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-notas',
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-notas.component.html',
  styleUrl: './tabla-notas.component.css'
})
export class TablaNotasComponent {
  @Input() students: { name: string, grades: number[] }[] = [];
  @Output() studentUpdated = new EventEmitter<void>();

  updateStudent() {
    this.studentUpdated.emit();
  }
}
