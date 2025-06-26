import { Component, input } from '@angular/core';
import { PokemonResistance } from '../../services/tyradex-api/model/pokemon-resistance';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-resistances',
  imports: [CommonModule],
  templateUrl: './pokemon-resistances.html',
  styleUrl: './pokemon-resistances.css'
})
export class PokemonResistances {
  resistances = input<PokemonResistance[]>();

  getResistanceImage(resistanceName: string) {
    const resistanceFormated = resistanceName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return `https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/${resistanceFormated}.png`;
  }
}
