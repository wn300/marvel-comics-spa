import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CharacterComponent } from "app/character/character.component";
import { FooterComponent } from "app/footer/footer.component";
import { HeaderComponent } from "app/header/header.component";
import { FavouritesComponent } from "app/favourites/favourites.component";
import { ComicsComponent } from "app/comics/comics.component";
import { ComicDetailsComponent } from "app/comics/comicDetails.component";

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HeaderComponent,
    FooterComponent,
    FavouritesComponent,
    ComicsComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
