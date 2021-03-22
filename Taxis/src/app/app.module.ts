import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { MapesComponent } from './mapes/mapes.component';
//Google
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    MapesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyANsKZFN4hNNIWHsVwaYFTDtRRRyPgShYU'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
