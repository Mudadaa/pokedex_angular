import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListes } from './pokemon-listes';

describe('PokemonListes', () => {
  let component: PokemonListes;
  let fixture: ComponentFixture<PokemonListes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
