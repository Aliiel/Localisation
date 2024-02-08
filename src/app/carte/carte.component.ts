import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CoordonneesService } from '../coordonnees.service';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})


export class CarteComponent {

  public axeY:string|any = '';
  public axeX:string|any = '';

  constructor (
    private coordonneesService: CoordonneesService
  ) {};


  ngOnInit(): void {

    this.coordonneesService.axeXSubject.subscribe((axeX:string) => {

      this.axeX = axeX;
    })

    console.log("Axe X récup depuis le composant adresse : " + this.axeX);

    var map = L.map('map').setView([51.505, -0.09], 13);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  }

}
