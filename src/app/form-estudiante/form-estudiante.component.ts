import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-estudiante',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent {
  studentName: string = '';
  studentGrades: string = '';

  @Output() studentAdded = new EventEmitter<{ name: string, grades: number[] }>();

  addStudent() {
    const gradesArray = this.studentGrades.split(',').map(grade => parseFloat(grade.trim()));
    if (this.studentName && gradesArray.length) {
      this.studentAdded.emit({ name: this.studentName, grades: gradesArray });
      this.studentName = '';
      this.studentGrades = '';
    }
  }
}
