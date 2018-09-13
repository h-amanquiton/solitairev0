import { Injectable } from '@angular/core';
import { Card } from './card';
import { cards } from './deck';

const numSuits = 4;
const numRanks = 13;

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  initDeck() {
    for (let s = 0; s < numSuits; s++) {
      for (let r = 0; r < numRanks; r++) {
        cards.push(new Card(r, s));
      }
     

    }
  }
}
