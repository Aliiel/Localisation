import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { HttpClientModule } from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { CarteComponent } from './carte/carte.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormulaireComponent, AdresseComponent, HttpClientModule, MeteoComponent, CarteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Localisation';
}
