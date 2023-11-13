import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Input } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bff-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, FormsModule],
  providers: [PokemonService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() device: string = '';

  #pokemonService = inject(PokemonService);

  pokemon$ = this.#pokemonService.pokemon$;

  pokemonId: string = '';

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    if (!this.pokemonId) {
      this.#pokemonService.getRandomPokemon();
    } else {
      this.#pokemonService.getPokemon(this.pokemonId.toLowerCase());
    }
  }
}
