import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { CodePostalService } from '../code-postal.service';
import 'animate.css';


@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  public champ = new FormControl('');
  public codePostal:string|any = '';

  constructor (private codePostalService: CodePostalService) {}


  recupererCodePostal () {

    this.codePostal = this.champ.value;

    this.codePostalService.setCodePostal(this.codePostal);

    const adresse = document.getElementById('adresse');
    const meteo = document.getElementById('meteo');
    const carte = document.getElementById('carte');

      adresse?.classList.remove('d-none');
      meteo?.classList.remove('d-none');
      carte?.classList.remove('d-none');


    console.log(adresse);
    

  }

  
}
