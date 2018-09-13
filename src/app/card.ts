enum Suit {Clubs = 0, Spades, Hearts, Diamonds };
enum Rank {
    Ace = 0, Deuces, Three, Four, Five, Six, Seven,
    Eight, Nine, Ten, Jack, Queen, King
}
enum Color { Black = 0, Red };

export class Card {

     rank: number;
     suit: number;
     
   

    public constructor (rank: Rank, suit: Suit,) {
        this.rank = rank;
        this.suit = suit;
        
    }

    private color = 
        (this.suit === Suit.Clubs || this.suit === Suit.Spades) ?
            Color.Black : Color.Red;


    public get suitValue(): string {
        return Suit[this.suit]
    }

    public get rankValue(): string {
        return Rank[this.rank]
    }

    public get cardName(): string {
        return  this.rankValue + '-' + this.suitValue;
    }

    public get image(): string {
        return "../assets/" + this.suit + "-" + this.rank + ".JPG";
    }

    



    

}
