import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeInformations } from './pokemon-type-informations';

describe('PokemonTypeInformations', () => {
  let component: PokemonTypeInformations;
  let fixture: ComponentFixture<PokemonTypeInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTypeInformations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
