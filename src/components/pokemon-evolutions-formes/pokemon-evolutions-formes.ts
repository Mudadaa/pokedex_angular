import { Component, effect, inject, input, signal } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { TyraDexApiService } from '../../services/tyradex-api/tyradex-api.service';
import { Pokemon } from '../../services/tyradex-api/model/pokemon';
import { PokemonEvolutionWrapper } from '../../services/tyradex-api/model/pokemon-evolution-wrapper';
import { PokemonFormes } from '../../services/tyradex-api/model/pokemon-formes';

@Component({
  selector: 'app-pokemon-evolutions-formes',
  imports: [],
  templateUrl: './pokemon-evolutions-formes.html',
  styleUrl: './pokemon-evolutions-formes.css',
})
export class PokemonEvolutionsFormes {
  private pokemonService = inject(TyraDexApiService);

  evolutions = input<PokemonEvolutionWrapper | null>(null);
  formes = input<PokemonFormes | null>(null);

  evolutionPokemons = signal<Pokemon[]>([]);
  megaPokemons = signal<Pokemon[]>([]);
  megaInfos = signal<any[]>([]); // texte si pas d'id

 constructor() {
  effect(() => {
    const evo = this.evolutions();

    const ids = [
      ...((evo?.pre ?? [])?.map(e => e.pokedex_id) ?? []),
      ...((evo?.next ?? [])?.map(e => e.pokedex_id) ?? []),
    ];

    if (!ids.length) {
      this.evolutionPokemons.set([]);
      return;
    }

    forkJoin(ids.map(id => this.pokemonService.getPokemonById(id)))
      .subscribe(list => this.evolutionPokemons.set(list));
  });
}

}
