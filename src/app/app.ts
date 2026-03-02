import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TyraDexApiService } from '../services/tyradex-api/tyradex-api.service';
import { Pokemon } from '../services/tyradex-api/model/pokemon';
import { PokemonView } from '../components/pokemon-view/pokemon-view';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button';
import { Subscription, interval } from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    PokemonView,
    
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private autoSub?: Subscription;
private readonly AUTO_MS = 1500; // vitesse (ms)
  showImage = true;
  randomPokemons: Pokemon[] = [];
hideFunction() {
throw new Error('Method not implemented.');
}
startAuto(ms = this.AUTO_MS) {
  if (!this.hasSlides) return;
  this.stopAuto();
  this.autoSub = interval(ms).subscribe(() => this.next());
}

stopAuto() {
  this.autoSub?.unsubscribe();
  this.autoSub = undefined;
}

ngOnDestroy() {
  this.stopAuto();
}
  protected title = 'tyradex-angular20';
  private pokemonService = inject(TyraDexApiService);
  pokemonData: Pokemon | undefined;
  pokemonNotExist = false;
  pokemonNotFoundName: string | undefined | null;

  pokemonForm = new FormGroup({
    pokemonName: new FormControl('')
  });
 ngOnInit() {
    this.loadRandomPokemons(6);
  }
  onSubmit() {
    const pokemonName = this.pokemonForm.value.pokemonName;

    if (pokemonName) {
      this.pokemonService.getPokemonByName(pokemonName)
      .subscribe(response => {
        if (response.status === 404) {
          console.error(`Pokemon non trouvé : ${pokemonName}`);
          this.pokemonData = undefined;
          this.pokemonNotExist = true;
          this.pokemonNotFoundName = this.pokemonForm.value.pokemonName; 
          return
        }
        this.pokemonData = response;
        this.pokemonNotExist = false;
      })
    }
  }
  
  
private fillRandomUnique(target: number) {
  if (this.randomPokemons.length >= target) {
    this.startAuto(); // ✅ démarre quand la liste est prête
    return;
  }

  this.pokemonService.getRandomPokemon().subscribe((p: Pokemon) => {
    const already = this.randomPokemons.some(x => x.pokedex_id === p.pokedex_id);

    if (!already) {
      this.randomPokemons = [...this.randomPokemons, p];
    }

    this.fillRandomUnique(target);
  });
}
  
  trackById = (_: number, p: Pokemon) => p.pokedex_id;
  
  currentIndex = 0;
  
  get hasSlides() {
    return this.randomPokemons.length > 0;
  }
  
  get currentPokemon() {
    return this.randomPokemons[this.currentIndex];
  }
  
  prev() {
    if (!this.hasSlides) return;
    this.currentIndex =
    (this.currentIndex - 1 + this.randomPokemons.length) % this.randomPokemons.length;
  }
  
  next() {
    if (!this.hasSlides) return;
    this.currentIndex =
    (this.currentIndex + 1) % this.randomPokemons.length;
  }
  
  goTo(i: number) {
    this.currentIndex = i;
  }
  
 loadRandomPokemons(count = 6) {
  this.stopAuto();
  this.randomPokemons = [];
  this.currentIndex = 0;
  this.fillRandomUnique(count);
}
  get loopPokemons(): Pokemon[] {
  // 6 + 6 = boucle sans blanc
  return [...this.randomPokemons, ...this.randomPokemons];
}
}

