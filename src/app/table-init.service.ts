import { Injectable } from '@angular/core';


const numberOfFound = 4;
const numberOfTabCol = 7;

@Injectable({
  providedIn: 'root'
})
export class TableInitService {

  constructor() { }

  initializeFoundation() {
    for (let found = 0; found < numberOfFound; found++) {

      let initF = document.createElement("div");
      initF.id = "found"+found;
      initF.style.border = '1px solid black';
      initF.style.height = '127px';
      initF.style.width  = '90px' ;
      initF.style.marginTop = '3px';
      initF.style.marginLeft = '20px';
      initF.style.cssFloat = 'top';
      document.getElementById("foundation").appendChild(initF);

    }
  }

  initializeTableau() {
    for (let tab = 0; tab < numberOfTabCol; tab++) {

      let initTab = document.createElement("div");
      initTab.id = "tabColumn"+tab;
      initTab.style.border = '1px solid black';
      initTab.style.height = '127px';
      initTab.style.width  = '90px';
      initTab.style.marginLeft = '20px';
      initTab.style.marginTop = '5px';
      initTab.style.cssFloat = 'left';
      document.getElementById("tableau").appendChild(initTab); 
    }
  }
}
