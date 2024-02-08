import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CoordonneesService } from '../coordonnees.service';
import { VilleService } from '../ville.service';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})


export class CarteComponent implements OnInit {

  public axeY:number = 0;
  public axeX:number = 0;
  private valeursOK:boolean = false;
  private map: L.Map | undefined;

  constructor (
    private coordonneesService: CoordonneesService,
    private villeService: VilleService
  ) {};


  ngOnInit(): void {

    this.coordonneesService.axeXSubject.subscribe((axeX:number) => {

      this.axeX = axeX;
      console.log("Axe X récup depuis le composant adresse : " + this.axeX);
      this.verifierValeurs();
    })

    this.coordonneesService.axeYSubject.subscribe((axeY:number) => {

      this.axeY = axeY;
      console.log("Axe Y récup depuis le composant adresse : " + this.axeY);
      this.verifierValeurs();
    })
}


verifierValeurs () {

  if (this.axeX != 0 && this.axeY != 0) {

    this.valeursOK = true;
    
    this.afficherCarte(this.axeX, this.axeY);
  }
}



afficherCarte (axeX:number, axeY:number) {

  if (this.map) {

    this.map.remove();
  }

  if (!this.valeursOK) {
    
    return;
  }
  
  console.log("Axe X arrivé dans afficherCate : " + axeX);
  console.log("Axe Y arrivé dans afficherCate : " + axeY);


    this.map = L.map('map').setView([axeY, axeX], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);

  L.marker([axeY, axeX]).addTo(this.map)
    .bindPopup('Ville de ' + this.villeService.getVille())
    .openPopup();

  }
}


