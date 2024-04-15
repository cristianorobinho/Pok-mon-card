import { ApiService, Pokemon } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Subscribable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Pokemon[] = []; 
  itemsPromise: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined;

  constructor(public apiSevice: ApiService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  async loadPokemons() {
    const newPokemons = await this.apiSevice.getPokemons();
    this.items = [...this.items, ...newPokemons];
  }

  async pokemonDetails(url: string) {
    const pokemon = await this.apiSevice.getPokemonDetails(url);
    console.log(pokemon);
  }

  // async pokemonByName(name: string) {
  //   const detailedPokemon = await this.apiSevice.getPokemonByName(name);
  //   if (detailedPokemon) {
  //     const pokemon: Pokemon = {
  //       name: detailedPokemon.name,
  //       url: ''
  //     };
  //     this.items = [pokemon];
  //   } else {
  //     console.log('Nenhum Pokémon encontrado com o nome:', name);
  //   }
  // }

  async searchPokemon(event: any) {
    const searchTerm = event.target.value.trim().toLowerCase(); // Convert to lowercase for easier comparison
    if (searchTerm !== '') {
      // Filter the pokemons whose name contains the search term
      const pokemon = await this.apiSevice.getPokemonByName(searchTerm);
      if (pokemon) {
        this.items = [pokemon];
      } else {
        console.log('No Pokemon found with the name:', searchTerm);
      }
    } else {
      // If the search field is empty, reload all pokemons
      this.loadPokemons();
    }
  }
  

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.loadPokemons();

    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }

}