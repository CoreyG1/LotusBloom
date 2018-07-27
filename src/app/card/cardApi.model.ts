

export interface CardApi{
    name: string;
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    supertypes: string[];
    types: string[];
    subtypes: string[];
    rarity: string;
    set: string;
    setName: string;
    text: string;
    flavor: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    layout: string;
    multiverseid: number;
    imageUrl: string;
    rulings: {
        date: string;
        text: string;
    }[];
    foreignNames: {
        name: string;
        imageUrl: string;
        language: string;
        multiverseid: number;
    }[];
    printings: string[];
    originalText: string;
    originalType: string;
    legalities: {
        format: string;
        legality: string;
    }[];
    id: string;

  
}

    
