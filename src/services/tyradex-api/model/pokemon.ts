import { ErrorPokemonNotFound } from "./error-pokemon-not-found";
import { PokemonEvolutionWrapper } from "./pokemon-evolution-wrapper";
import { PokemonFormes } from "./pokemon-formes";
import { PokemonName } from "./pokemon-name";
import { PokemonResistance } from "./pokemon-resistance";
import { PokemonSexe } from "./pokemon-sexe";
import { PokemonSprite } from "./pokemon-sprite";
import { PokemonStats } from "./pokemon-stats";
import { PokemonTalent } from "./pokemon-talent";
import { PokemonType } from "./pokemon-type";

export interface Pokemon extends ErrorPokemonNotFound {
    pokedex_id: number;
    generation: number;
    category: string;
    name: PokemonName;
    sprites: PokemonSprite;
    types: PokemonType[];
    talents: PokemonTalent[];
    stats: PokemonStats;
    resistances: PokemonResistance[];
    evolution: PokemonEvolutionWrapper;
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: PokemonSexe;
    catch_rate: number;
    level_100: number;
    formes: PokemonFormes;
}