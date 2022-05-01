import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca', component: AcercaDeComponent },
  { path: 'articulos', component: ArticuloListComponent },
  { path: 'articulo-ficha/:idArticulo', component: ArticuloFormComponent },
  { path: 'directivas', component: DirectivasComponent  },
  { path: 'pipes', component:PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
