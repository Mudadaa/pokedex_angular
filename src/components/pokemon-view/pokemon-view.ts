import { Component, input } from '@angular/core';
import { Pokemon } from '../../services/tyradex-api/model/pokemon';
import { PokemonStatistics } from '../pokemon-statistics/pokemon-statistics';
import { PokemonResistances } from '../pokemon-resistances/pokemon-resistances';
import { PokemonTypeInformations } from '../pokemon-type-informations/pokemon-type-informations';
import { PokemonEvolutionsFormes } from '../pokemon-evolutions-formes/pokemon-evolutions-formes';

@Component({
  selector: 'app-pokemon-view',
  imports: [
    PokemonStatistics,
    PokemonResistances,
    PokemonTypeInformations,
    PokemonEvolutionsFormes
  ],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css'
})
export class PokemonView {
  pokemon = input<Pokemon>();
}
