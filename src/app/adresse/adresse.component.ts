import { Component } from '@angular/core';
import { CodePostalService } from '../code-postal.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VilleService } from '../ville.service';

@Component({
  selector: 'app-adresse',
  standalone: true,
  templateUrl: './adresse.component.html',
  styleUrl: './adresse.component.css'
})
export class AdresseComponent {

  public codePostal:string|any = '';
  private configUrl = "https://api-adresse.data.gouv.fr/search/?q=";
  public ville:string|any = '';
  public axeY:string|any = '';
  public axeX:string|any = '';


  constructor (
    private codePostalService: CodePostalService,
    private http: HttpClient,
    private villeService: VilleService) { }

  ngOnInit(): void {

    this.codePostalService.codePostalSubject.subscribe((codePostal: string) => {

      this.codePostal = codePostal;
      console.log(this.codePostal);
    });
  }

  afficherVille () {

    console.log(this.codePostal);

    return this.http.get(this.configUrl + this.codePostal)
    .subscribe((data:any) => {

      data = data.features[0];
      this.ville = data.properties.name;
      this.axeX = data.geometry.coordinates[0];
      this.axeY = data.geometry.coordinates[1];

      this.villeService.setVille(this.ville);

      console.log(data);
    })
  }
}
