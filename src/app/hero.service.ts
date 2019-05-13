import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Heroes } from './MockHeroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("FETCHED HEROES");
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
