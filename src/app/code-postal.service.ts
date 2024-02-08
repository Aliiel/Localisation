import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodePostalService {

  public codePostal:string|any = '';
  public codePostalSubject: Subject<string> = new Subject<string>();

  constructor() { }


  getCodePostal(): string | undefined {
    return this.codePostal;
  }

  setCodePostal(codePostal: string): void {
    this.codePostal = codePostal;
    this.codePostalSubject.next(codePostal); 
  }
}
