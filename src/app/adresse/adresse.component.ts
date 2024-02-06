import { Component } from '@angular/core';
import { CodePostalService } from '../code-postal.service';

@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [],
  templateUrl: './adresse.component.html',
  styleUrl: './adresse.component.css'
})
export class AdresseComponent {

  public codePostal:string|any = '';


  constructor (private codePostalService: CodePostalService) {

    this.codePostal = this.codePostalService.getCodePostal();

    console.log(this.codePostal)
  }

  

}
