import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  public ville:string|any = '';
  public villeSubject: Subject<string> = new Subject<string>();

  constructor() { }


  getVille(): string | undefined {
    return this.ville;
  }

  setVille(ville: string): void {
    this.ville = ville;
    this.villeSubject.next(this.ville); 
  }
}
