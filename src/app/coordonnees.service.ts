import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordonneesService {

  public axeX:number = 0;
  public axeY:number = 0;
  public axeXSubject: Subject<number> = new Subject<number>();
  public axeYSubject: Subject<number> = new Subject<number>();

  constructor() { }


  getAxeX(): number {
    return this.axeX;
  }

  getAxeY(): number {
    return this.axeY;
  }

  setAxeX(axeX: number): void {
    this.axeX = axeX;
    this.axeXSubject.next(axeX); 
  }

  setAxeY(axeY: number): void {
    this.axeY = axeY;
    this.axeYSubject.next(axeY); 
  }
}
