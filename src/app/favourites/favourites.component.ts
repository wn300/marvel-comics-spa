import { Component, Input,Injectable, Pipe } from '@angular/core';
import { favouriteService } from '../../../CORE/services/favourite.service';
import { comicObject } from "../../../CORE/models/comicModel";

@Component({
    selector:'favourites',
    templateUrl:'./favourites.component.html',
    styleUrls:['./favourites.component.css','../app.component.css'],
    providers: [favouriteService],
})
export class FavouritesComponent {
 favourites: Array<comicObject>=[];
 selectedComic: comicObject;

  @Input()
  set recivedfavourite(recivedfavourite: comicObject) {
    this.selectedComic = recivedfavourite;
    this.adminFavourites();
  }
   @Input()
   set actionFavourite(action: boolean){
     this.adminFavourites();
   }  
  

  constructor(private LS: favouriteService ){
    this.favourites = this.LS.getFavourites();  
    // if(this.favourites.length==0){      
    //   this.getRandomFavourites();
    // }
  }
  addRandomFavourites(){    
    // if(this.favourietsRandom != ""){
    //     this.LS.addRandomFavourites(this.favourietsRandom);
    // }
  }
  adminFavourites(){
     if(this.selectedComic!= undefined)
    {
      this.favourites = this.LS.getFavourites();     
      let InsertObject = this.favourites.filter(comic => comic.id == this.selectedComic.id);    
      if (InsertObject.length == 0)
      {
        this.favourites.push(this.selectedComic);
        this.LS.addFavourite(this.favourites);       
      }
      else
      {
        this.favourites= this.favourites.filter(comic => comic.id != this.selectedComic.id);
        this.LS.addFavourite(this.favourites);
      }
    }
  }
  deleteFavourite(deleteComic: comicObject){    
    this.selectedComic = deleteComic;
    this.adminFavourites();
  }

  getRandomFavourites(){
    // document.getElementById("rnd").click();
    
    
  }

}


