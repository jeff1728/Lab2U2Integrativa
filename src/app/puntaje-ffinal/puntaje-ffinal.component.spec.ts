import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeFFinalComponent } from './puntaje-ffinal.component';

describe('PuntajeFFinalComponent', () => {
  let component: PuntajeFFinalComponent;
  let fixture: ComponentFixture<PuntajeFFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntajeFFinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntajeFFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
