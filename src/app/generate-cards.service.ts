import { Injectable } from '@angular/core';
import { Card } from './card';

const SUITARR = ["1","2","3","4"];
const RANKARR = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
let tempArr = [];
let rValue = document.createAttribute("rankValue");
let sValue = document.createAttribute("suitValue");
let cardStatus = document.createAttribute("isFaceUp");
let cardColor = document.createAttribute("isCardRed");


@Injectable({
  providedIn: 'root'
})
export class GenerateCardsService {

  constructor() { }

  createCardArray() {
    for (let s = 0; s < SUITARR.length; s++) {
      for (let r =0; r < RANKARR.length; r++) {
        tempArr.push(s,r);
      }
    }
  }

  generateCardTemplate() {
    for (let x = 0; x < tempArr.length; x++) {
      let idx = tempArr[x];
      let initCard = document.createElement("div");
      sValue.value = idx[0];
      rValue.value = idx[1];
      cardStatus.value = "1";
      cardColor.value = "red"
      initCard.id  = idx[0] + "-" + idx[1];
      initCard.className = "card";
      initCard.setAttributeNode(rValue);  //setAttributeNode was used because value was already declared
      initCard.setAttributeNode(sValue);
      initCard.setAttributeNode(cardStatus);
      initCard.style.backgroundImage = "url('../assets/" + idx[0] + "-" + idx[1] + ".JPG')";
      document.getElementById("tableau").appendChild(initCard);
      

    }
  }
}
