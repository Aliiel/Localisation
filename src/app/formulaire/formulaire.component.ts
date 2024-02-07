import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { TransmissionService } from '../transmission.service';


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

  constructor (private transmissionService: TransmissionService) {}

  recupererCodePostal () {

    this.codePostal = this.champ.value;

    this.transmissionService.setDonnee(this.codePostal);

  }

  
}
