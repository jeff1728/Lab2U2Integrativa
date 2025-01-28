import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuntajeFFinalComponent } from './puntaje-ffinal/puntaje-ffinal.component';
import { FormEstudianteComponent } from './form-estudiante/form-estudiante.component';
import { TablaNotasComponent } from './tabla-notas/tabla-notas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormEstudianteComponent,TablaNotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  title = 'Lab2U2Integrativa';
}
