import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { InversorNombrePipe } from './shared/inversor-nombre.pipe';
import { TypescriptEjemploComponent } from './typescript-ejemplo/typescript-ejemplo.component';
import { ArticuloCardComponent } from './articulo/articulo-card/articulo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeComponent,
    NavbarComponent,
    FooterComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    DirectivasComponent,
    PipesComponent,
    InversorNombrePipe,
    TypescriptEjemploComponent,
    ArticuloCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
