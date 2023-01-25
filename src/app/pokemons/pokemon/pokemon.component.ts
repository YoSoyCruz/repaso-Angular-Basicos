import { Component } from "@angular/core";

@Component({
    selector: 'app-pokemon',
    templateUrl: 'pokemon.component.html'    
})
export class PokemonComponent{
    nombre: string = 'Pikachu';
    noPokedex: number =  25;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.noPokedex}`
    }

    cambiarNombre(): void{
        this.nombre = 'Bulbasaur';
    }

    cambiarNoPokedex(): void{
        this.noPokedex = 1;
    }
}
