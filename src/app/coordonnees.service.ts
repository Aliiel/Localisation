import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordonneesService {

  public axeX:string|any = '';
  public axeY:string|any = '';
  public axeXSubject: Subject<string> = new Subject<string>();
  public axeYSubject: Subject<string> = new Subject<string>();

  constructor() { }


  getAxeX(): string | undefined {
    return this.axeX;
  }

  getAxeY(): string | undefined {
    return this.axeY;
  }

  setAxeX(axeX: string): void {
    this.axeX = axeX;
    this.axeXSubject.next(axeX); 
  }

  setAxeY(axeY: string): void {
    this.axeY = axeY;
    this.axeYSubject.next(axeY); 
  }
}
