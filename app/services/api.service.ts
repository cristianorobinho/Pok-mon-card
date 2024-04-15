import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Pokemon {
  name: string;
  url: string;
  id?: number;
  types?: string[];
  hp?: number;
  attack?: number;
  defense?: number;
  specialAttack?: number;
  specialDefense?: number;
  image?: string;
}

interface DetailedPokemon {
  id: number;
  name: string;
  types: string[];
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  type: string;
  image: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  public async getPokemons(): Promise<Pokemon[]> {
    try {
      const response = await axios.get(this.nextUrl);
      this.nextUrl = response.data.next;
      const pokemons: Pokemon[] = await Promise.all(response.data.results.map(async (pokemonData: any) => {
        const detailedPokemon = await this.getPokemonDetails(pokemonData.url);
        return {
          name: pokemonData.name,
          url: pokemonData.url,
          id: detailedPokemon?.id,
          types: detailedPokemon?.types,
          hp: detailedPokemon?.hp,
          attack: detailedPokemon?.attack,
          defense: detailedPokemon?.defense,
          specialAttack: detailedPokemon?.specialAttack,
          specialDefense: detailedPokemon?.specialDefense,
          image: detailedPokemon?.image
        };
      }));
      return pokemons;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async getPokemonDetails(url: string): Promise<DetailedPokemon | null> {
    try {
      const response = await axios.get(url);
      const pokemon: DetailedPokemon = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((type: any) => type.type.name),
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
        type: response.data.types[0].type.name,
        image: response.data.sprites.other['official-artwork'].front_default,
        url: response.data.url
      };
      console.log(pokemon);
      return pokemon;
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
      throw new Error("An unexpected error occurred while fetching Pokémon details. Please try again later.");
    }
  }

public async getPokemonByName(name: string): Promise<DetailedPokemon | null> {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon: DetailedPokemon = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((type: any) => type.type.name),
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
        type: response.data.types[0].type.name,
        image: response.data.sprites.other['official-artwork'].front_default,
        url: ''
      };
      console.log(pokemon);
      return pokemon;
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
      throw new Error("An unexpected error occurred while fetching Pokémon details. Please try again later.");
    }
}

  constructor() {}
}
