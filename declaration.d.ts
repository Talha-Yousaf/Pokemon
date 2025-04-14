declare module '*.png' {
    const value: any;
    export = value;
  }
  
  declare module '*.jpg' {
    const value: any;
    export = value;
  }
  
  declare module '*.jpeg' {
    const value: any;
    export = value;
  }
  
  declare module '*.gif' {
    const value: any;
    export = value;
  }
  declare module '*.svg' {
    const value: any;
    export = value;
  }

 type PokemonResult = {
    name: string;
    url: string;
  }

  interface Stat {
    name: string;
    value: number;
  }
  
  interface PokemonDetail {
    id: number;
    name: string;
    types: {name:string,color:string}[];
    height: number;
    weight: number;
    abilities: string[];
    stats: Stat[];
    image: string;
    flavorText: string;
    mainType: string | null;
  }

