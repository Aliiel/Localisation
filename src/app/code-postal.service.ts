import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodePostalService {

  public codePostal:string|any = '';

  constructor() { }


  getCodePostal(): string | undefined {
    return this.codePostal;
  }

  setCodePostal(codePostal: string): void {
    this.codePostal = codePostal;
  }

}
