import { Routes } from '@angular/router';
import { PokemonView } from '../components/pokemon-view/pokemon-view';
import { PokemonListes } from '../components/pokemon-listes/pokemon-listes';

export const routes: Routes = [

{
    path: '',
    component: PokemonView
},
{
    path:'liste',
    component: PokemonListes
}



];
