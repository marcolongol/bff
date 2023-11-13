import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Input } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'bff-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  providers: [PokemonService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() device: string = '';

  #pokemonService = inject(PokemonService);

  pokemon$ = this.#pokemonService.pokemon$;

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    this.#pokemonService.getRandomPokemon();
  }
}
