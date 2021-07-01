import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
