import { Component } from '@angular/core';
import { CodePostalService } from '../code-postal.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoordonneesService } from '../coordonnees.service';
import { VilleService } from '../ville.service';


@Component({
  selector: 'app-adresse',
  standalone: true,
  templateUrl: './adresse.component.html',
  styleUrl: './adresse.component.css'
})

export class AdresseComponent {

  private configUrl = "https://api-adresse.data.gouv.fr/search/?q=";
  public codePostal:string|any = '';
  public ville:string|any = '';
  public axeY:number = 0;
  public axeX:number = 0;
  public population:string|any = '';


  constructor (
    private codePostalService: CodePostalService,
    private http: HttpClient,
    private coordonneesService: CoordonneesService,
    private villeService: VilleService
    ) { }

  ngOnInit(): void {

    this.codePostalService.codePostalSubject.subscribe((codePostal: string) => {
      this.codePostal = codePostal;
      console.log(this.codePostal);
      this.afficherVille(this.codePostal);
    });
  }


  afficherVille (codePostal:string) {

    return this.http.get(this.configUrl + this.codePostal)
    .subscribe((data:any) => {

      data = data.features[0];
      this.ville = data.properties.city;
      this.population = data.properties.population;
      this.axeX = data.geometry.coordinates[0];
      this.axeY = data.geometry.coordinates[1];

      this.villeService.setVille(this.ville);
      this.coordonneesService.setAxeX(this.axeX);
      this.coordonneesService.setAxeY(this.axeY);
      console.log("axe X = " + this.axeX);
      console.log("axe Y = " + this.axeY);

      console.log(data);
    })
  }
}
