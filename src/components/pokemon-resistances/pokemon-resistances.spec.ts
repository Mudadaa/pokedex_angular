import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResistances } from './pokemon-resistances';

describe('PokemonResistances', () => {
  let component: PokemonResistances;
  let fixture: ComponentFixture<PokemonResistances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonResistances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonResistances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
