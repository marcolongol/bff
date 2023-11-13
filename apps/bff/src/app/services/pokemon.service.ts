import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { DeviceDetectorService } from './device-detector.service';
import { Pokemon } from '../types/pokemon.model';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokemonService {
  #pokemon = new BehaviorSubject<Pokemon | null>(null);

  pokemon$ = this.#pokemon.asObservable();

  #client = inject(HttpClient);

  #deviceDetectorService = inject(DeviceDetectorService);

  #endpoint = this.#deviceDetectorService.isMobile()
    ? `https://${environment.env['BFF_MOBILE_API_PORT']}/pokemon`
    : `https://${environment.env['BFF_DESKTOP_API_PORT']}/pokemon`;

  getPokemon(idOrName: string) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });
    this.#client
      .get(`${this.#endpoint}/${idOrName}`, { headers })
      .pipe(
        map((pokemon: any) => {
          return {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.other['official-artwork'].front_default,
            types: pokemon.types.map((type: any) => type.type.name),
          };
        }),
        tap((pokemon: Pokemon) => {
          console.log(`Pokemon ${pokemon.name} has been loaded`);
        })
      )
      .subscribe((pokemon: Pokemon) => {
        this.#pokemon.next(pokemon);
      });
  }

  getRandomPokemon() {
    const id = Math.floor(Math.random() * 898) + 1;
    return this.getPokemon(id.toString());
  }
}
