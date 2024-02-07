import { Component } from '@angular/core';
import { TransmissionService } from '../transmission.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})

export class MeteoComponent {

  private configUrl = "https://api.openweathermap.org/data/2.5/weather?city=";
  private cleAPI = "&appid=898a50f155c3110289fd20cea175abab";
  public ville:string|any = '';

  constructor (
    private transmissionService: TransmissionService,
    private http: HttpClient
  ) {};


  ngOnInit(): void {

    this.transmissionService.donneeSubject.subscribe((ville: string) => {
      this.ville = ville;
      console.log(this.ville);
    });

  }


  afficherMeteo () {

    return this.http.get(this.configUrl + this.ville + this.cleAPI)

    .subscribe((data:any) => {

      console.log(data);

    })
  }
}
