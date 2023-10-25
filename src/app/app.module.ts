import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    MenuComponent,
    CardGameComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
