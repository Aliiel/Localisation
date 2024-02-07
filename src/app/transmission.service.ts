import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  public donnee:string|any = '';
  public donneeSubject: Subject<string> = new Subject<string>();

  constructor() { }


  getDonnee(): string | undefined {
    return this.donnee;
  }

  setDonnee(donnee: string): void {
    this.donnee = donnee;
    this.donneeSubject.next(donnee); 
  }

}
