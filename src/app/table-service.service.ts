import { Injectable } from '@angular/core';

const numberOfFound = 4;
const numberOfTabCol = 7;

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  constructor() { }

  initializeFoundation() {
    for (let found = 0; found < numberOfFound; found++) {

      let initF = document.createElement("div");
      initF.id = "found"+found;
      initF.style.border = '1px solid black';
      document.getElementById("foundation").appendChild(initF);

    }
  }
}
