import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Pokemon } from "./model/pokemon";
import { map, Observable, shareReplay } from "rxjs";

@Injectable({ providedIn: 'root'})
export class TyraDexApiService {
    private http = inject(HttpClient);

    private BASE_URL = 'https://tyradex.app/api/v1'

    getPokemonByName(name: string) {
        return this.http.get<Pokemon>(`${this.BASE_URL}/pokemon/${name}`)
    }
    getPokemonById(id: number) {
  return this.http.get<Pokemon>(`${this.BASE_URL}/pokemon/${id}`);
}
 // ✅ charge la liste 1 seule fois
  private allPokemon$ = this.http.get<Pokemon[]>(`${this.BASE_URL}/pokemon`).pipe(
    shareReplay(1)
  );

  // ✅ renvoie un Pokémon random depuis la liste
  getRandomPokemon(): Observable<Pokemon> {
    return this.allPokemon$.pipe(
      map(list => list[Math.floor(Math.random() * list.length)])
    );
  }
}