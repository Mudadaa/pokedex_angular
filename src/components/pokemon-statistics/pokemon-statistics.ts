import { Component, input } from '@angular/core';
import { PokemonStats } from '../../services/tyradex-api/model/pokemon-stats';

@Component({
  selector: 'app-pokemon-statistics',
  imports: [],
  templateUrl: './pokemon-statistics.html',
  styleUrl: './pokemon-statistics.css'
})
export class PokemonStatistics {
  statistics = input<PokemonStats>();
} 
