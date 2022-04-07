export type Pokemon = {
    id: number;
    name: string;
    image: string;
}

export type PokemonDetail = {
    name: string;
    image: string;
    type: string[];
    stats: [{
      name: string,
      value: number;
    }]
}