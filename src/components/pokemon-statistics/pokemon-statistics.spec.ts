import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatistics } from './pokemon-statistics';

describe('PokemonStatistics', () => {
  let component: PokemonStatistics;
  let fixture: ComponentFixture<PokemonStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatistics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatistics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
