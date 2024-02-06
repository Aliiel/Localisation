import { Component } from '@angular/core';
import { VilleService } from '../ville.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent {

  public ville:string|any = '';

  constructor (
    private villeService: VilleService,
    private http: HttpClient
  ) {};


  ngOnInit(): void {

    this.villeService.villeSubject.subscribe((ville: string) => {

      this.ville = ville;
      console.log(this.ville);
    });
  }


  afficherMeteo () {

    console.log(this.ville);
  }

}
