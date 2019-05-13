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

  constructor(private messageService: MessageService) { }
}
