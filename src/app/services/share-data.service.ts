import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personaje } from '../models/Personaje';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private listadoPersonajesSource = new BehaviorSubject<Array<Personaje>>([]);
  currentlistadoPersonaje = this.listadoPersonajesSource.asObservable();
  
  constructor() { }

  setListadoPersonaje(listado: Array<Personaje>) {
    this.listadoPersonajesSource.next(listado);
  }
}
