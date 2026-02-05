import { PokemonEvolution } from "./pokemon-evolution";
import { PokemonMega } from "./pokemon-mega";

export interface PokemonEvolutionWrapper {
  pre: PokemonEvolution[] | null;
  next: PokemonEvolution[] | null;
  mega: PokemonMega[] | null;
}
