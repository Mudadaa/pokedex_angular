import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEvolutionsFormes } from './pokemon-evolutions-formes';

describe('PokemonEvolutionsFormes', () => {
  let component: PokemonEvolutionsFormes;
  let fixture: ComponentFixture<PokemonEvolutionsFormes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEvolutionsFormes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonEvolutionsFormes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
