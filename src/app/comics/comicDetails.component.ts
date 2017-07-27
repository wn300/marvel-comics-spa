import { Component, Input, Output, EventEmitter, Injectable, Pipe} from '@angular/core';
import { comicService } from '../../../CORE/services/comic.service';
import { favouriteService } from '../../../CORE/services/favourite.service';
import { comicObject } from "../../../CORE/models/comicModel";


@Component({
  selector: 'comicDetails-view',
  templateUrl: './comicDetails.component.html',
  styleUrls: ['./comics.component.css','../app.component.css'],  
  providers: [comicService,favouriteService],
})
export class ComicDetailsComponent
{
  public comicDetails: comicObject;
  public comicFavourite: boolean = false;
  favourites: Array<comicObject>=[];

  @Input()
  set recivedcomic(recivedcomic: number){
  this.getComic(recivedcomic);
  this.favourites = this.LS.getFavourites(); 
      let InsertObject = this.favourites.filter(comic => comic.id == recivedcomic);    
      if (InsertObject.length > 0)
      {
        this.comicFavourite = true;
      }
  }
   @Output() 
    selectedFavourite: EventEmitter<comicObject> = new EventEmitter<comicObject>();

  constructor(private API: comicService, private LS: favouriteService){
    
    }
  getComic(idComic: number){
    this.API.getComicById(idComic).subscribe((data) => { this.comicDetails = data.data.results[0]});      
    }
 
 selectFavourite(){
    this.selectedFavourite.emit(this.comicDetails);
    this.comicFavourite = !this.comicFavourite;
  }
}