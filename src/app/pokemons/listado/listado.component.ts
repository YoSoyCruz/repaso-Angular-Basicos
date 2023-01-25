import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  pokemon: string[] = ['Articuno', 'Tiranytar', 'Pikachu', 'Wooloo', 'Empoleon'];
  pokemonBorrado: string = '';

  borrarPokemon(): string {
    
    if(this.pokemon.length != 0)
    {
      this.pokemonBorrado = this.pokemon.shift() || '';
    }else{
      console.log('Ya no hay pokemon por borrar');
      this.pokemonBorrado = '';
    }
    return this.pokemonBorrado;
  }
}
