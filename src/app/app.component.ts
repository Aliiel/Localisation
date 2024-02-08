import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { HttpClientModule } from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormulaireComponent, AdresseComponent, HttpClientModule, MeteoComponent, CarteComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Localisation';
}
