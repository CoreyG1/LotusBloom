import { Component, OnInit } from '@angular/core';

import { Card } from '../card/card.model';
import { CardApi } from '../card/cardApi.model';
import { CardApiList } from '../card/cardApiList.model';
import { CardService } from '../card/card.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
@Injectable()
export class CardlistComponent implements OnInit {


  
  
testCard : CardApi  = 
  {
    "name": "Yisan, the Wanderer Bard",
    "manaCost": "{2}{G}",
    "cmc": 3,
    "colors": [
        "Green"
    ],
    "colorIdentity": [
        "G"
    ],
    "type": "Legendary Creature — Human Rogue",
    "supertypes": [
        "Legendary"
    ],
    "types": [
        "Creature"
    ],
    "subtypes": [
        "Human",
        "Rogue"
    ],
    "rarity": "Rare",
    "set": "M15",
    "setName": "Magic 2015 Core Set",
    "text": "{2}{G}, {T}, Put a verse counter on Yisan, the Wanderer Bard: Search your library for a creature card with converted mana cost equal to the number of verse counters on Yisan, put it onto the battlefield, then shuffle your library.",
    "flavor": "Designed by Brian Fargo",
    "artist": "Chase Stone",
    "number": "209",
    "power": "2",
    "toughness": "3",
    "layout": "normal",
    "multiverseid": 383442,
    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383442&type=card",
    "rulings": [
        {
            "date": "2014-07-18",
            "text": "If Yisan isn't on the battlefield when its ability resolves, use the number of verse counters on it when it left the battlefield to determine which creature cards may be put onto the battlefield. This number will include the counter you put on Yisan to activate the ability."
        }
    ],
    "foreignNames": [
        {
            "name": "云游诗人伊散",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383726&type=card",
            "language": "Chinese Simplified",
            "multiverseid": 383726
        },
        {
            "name": "雲遊詩人伊散",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384010&type=card",
            "language": "Chinese Traditional",
            "multiverseid": 384010
        },
        {
            "name": "Yisan der Wanderbarde",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384294&type=card",
            "language": "German",
            "multiverseid": 384294
        },
        {
            "name": "Yisan, barde vagabond",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384578&type=card",
            "language": "French",
            "multiverseid": 384578
        },
        {
            "name": "Yisan, il Bardo Errante",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384862&type=card",
            "language": "Italian",
            "multiverseid": 384862
        },
        {
            "name": "放浪の吟遊詩人、イーサーン",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385146&type=card",
            "language": "Japanese",
            "multiverseid": 385146
        },
        {
            "name": "방랑 음유시인 이산",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385430&type=card",
            "language": "Korean",
            "multiverseid": 385430
        },
        {
            "name": "Yisan, o Bardo Andarilho",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385714&type=card",
            "language": "Portuguese (Brazil)",
            "multiverseid": 385714
        },
        {
            "name": "Исан, Бродячий Бард",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385998&type=card",
            "language": "Russian",
            "multiverseid": 385998
        },
        {
            "name": "Yisan, el bardo errante",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386282&type=card",
            "language": "Spanish",
            "multiverseid": 386282
        }
    ],
    "printings": [
        "M15"
    ],
    "originalText": "{2}{G}, {T}, Put a verse counter on Yisan, the Wanderer Bard: Search your library for a creature card with converted mana cost equal to the number of verse counters on Yisan, put it onto the battlefield, then shuffle your library.",
    "originalType": "Legendary Creature — Human Rogue",
    "legalities": [
        {
            "format": "Commander",
            "legality": "Legal"
        },
        {
            "format": "Legacy",
            "legality": "Legal"
        },
        {
            "format": "Modern",
            "legality": "Legal"
        },
        {
            "format": "Vintage",
            "legality": "Legal"
        }
    ],
    "id": "f486f713cfa169f07cf2dfb253a43c1de036408d"
};

myCards: CardApiList;

  

  
  constructor(private cardService: CardService) { }
  ngOnInit() {
      
  }

  onSearch(name: string){
    this.cardService.getCard(name)
    .subscribe(
        data => {
            this.myCards = data;
            
            
        }
        );

  
  }

  /*AddCard(Cards: CardApi){
      var testcard = new Card(Cards.name,Cards.imageUrl)
      this.cards.push(testcard)
  }
*/
}
