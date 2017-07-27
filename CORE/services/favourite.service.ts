import { Injectable } from '@angular/core';
import { comicObject } from "../models/comicModel";


@Injectable()
export class favouriteService {
   
    getFavourites(){
        if(localStorage.getItem('favourites')=== null ||localStorage.getItem('favourites')===undefined)
        {
            return [];            
        }        
         return JSON.parse(localStorage.getItem('favourites'));
    }
    addFavourite(favourites){
        
        localStorage.setItem('favourites',JSON.stringify(favourites));
    }

    addRandomFavourites(favourites){
        
        localStorage.setItem('favourites',favourites);
    }
     getRandomComics(){        
         return JSON.parse(localStorage.getItem('RandomFav'));
    }
     saveRandomComics(favourites: Array<number>){        
        localStorage.setItem('RandomFav',JSON.stringify(favourites));
    }

}