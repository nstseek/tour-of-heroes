import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Heroes } from './MockHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return Heroes;
  }

  constructor() { }
}
