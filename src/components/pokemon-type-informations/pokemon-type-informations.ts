import { Component, input } from '@angular/core';
import { PokemonType } from '../../services/tyradex-api/model/pokemon-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-type-informations',
  imports: [CommonModule],
  templateUrl: './pokemon-type-informations.html',
  styleUrl: './pokemon-type-informations.css'
})
export class PokemonTypeInformations {
  types = input<PokemonType[]>();
}
