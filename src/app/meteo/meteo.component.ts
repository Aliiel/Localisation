import { Component } from '@angular/core';
import { VilleService } from '../ville.service';
import { HttpClient } from '@angular/common/http';
import { CodePostalService } from '../code-postal.service';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})

export class MeteoComponent {

  private configUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  private cleAPI = "&appid=898a50f155c3110289fd20cea175abab";
  private celsius = "&units=metric";
  private fr = "&lang=fr";
  private locFr = ",fr";
  private iconURL = "https://openweathermap.org/img/wn/";
  public ville: string | any = '';
  public temperature: string = '';
  public temps: string = '';
  public icon: string | any = '';
  public codePostal: string | any = '';

  constructor(
    private villeService: VilleService,
    private http: HttpClient,
    private codePostalService: CodePostalService
  ) { };


  ngOnInit(): void {

    this.villeService.villeSubject.subscribe((ville: string) => {
      this.ville = ville;
      console.log(this.ville);

      this.afficherMeteo(this.ville);

    });

    this.codePostalService.codePostalSubject.subscribe((codePostal: string) => {

      this.codePostal = codePostal;
    })

  }


  afficherMeteo(codePostal: string) {

    return this.http.get(this.configUrl + this.codePostal + this.locFr + this.cleAPI + this.celsius + this.fr)

      .subscribe((data: any) => {

        this.temperature = data.main.temp;
        this.temps = data.weather[0].description;
        this.icon = this.iconURL + data.weather[0].icon + ".png";

        console.log(data);
        console.log(this.temperature);

      })
  }
}
