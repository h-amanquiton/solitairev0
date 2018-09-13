import { Component } from '@angular/core';


import { TableInitService } from './table-init.service';
import { GenerateCardsService } from './generate-cards.service';
import { CardService } from './card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solitaire.V0';

  constructor(
    private tableInit: TableInitService,
    private genCard: GenerateCardsService,
    private cardServe: CardService
    
    ) { }

  ngOnInit() {
    this.tableInit.initializeFoundation();
    this.tableInit.initializeTableau();
//    this.genCard.createCardArray();
//    this.genCard.generateCardTemplate();
    this.cardServe.initDeck();
    
  }
}

