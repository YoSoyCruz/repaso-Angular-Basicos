import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

@NgModule({
    declarations:[
        PokemonComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class PokemonModule{

}