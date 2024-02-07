import { Component } from '@angular/core';
import { TransmissionService } from '../transmission.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
  public axeY:string|any = '';
  public axeX:string|any = '';
  public population:string|any = '';


  constructor (
    private transmissionService: TransmissionService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

    this.transmissionService.donneeSubject.subscribe((codePostal: string) => {
      this.codePostal = codePostal;
      console.log(this.codePostal);
    });

    this.afficherVille(this.codePostal);
  }

  afficherVille (codePostal:string) {

    console.log(this.codePostal);

    return this.http.get(this.configUrl + this.codePostal)
    .subscribe((data:any) => {

      data = data.features[0];
      this.ville = data.properties.city;
      this.population = data.properties.population;
      this.axeX = data.geometry.coordinates[0];
      this.axeY = data.geometry.coordinates[1];

      this.transmissionService.setDonnee(this.ville);

      console.log(data);
    })
  }
}
