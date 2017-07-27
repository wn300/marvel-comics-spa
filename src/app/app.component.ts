import { Component } from '@angular/core';

import { comicObject } from "../../CORE/models/comicModel";
import { selectedCharacterObject } from "../../CORE/models/selectedCharacterModel";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 

onSelectedFavourite(favourite: comicObject): void{
  if (this.comicFavourite == favourite)
  {
    this.actionFav = !this.actionFav;
    return;
  }
  this.comicFavourite = favourite;
  
}

onSelectedCharacter(selectedCharacter: selectedCharacterObject): void{
  this.selectedCharacter = selectedCharacter;
  this.actionCharacter= !this.actionCharacter;
  this.Modal("comics");
}
onSelectedComic(selectedComic: number): void{
  this.idComic = selectedComic;
  this.Modal("detail"); 
  this.originPopUp=false;
}
onSelectedComicDet(selectedComic: number): void{
  this.idComic = selectedComic;
  this.Modal("detail")
  this.originPopUp=true; 
}
onGetRandom(selectedComic: boolean): void{
  this.getComics = !this.getComics;
}  
Modal(action:string){
  if(action == "cerrar"){
    this.dmModal= "";
    if(this.modalOption=="detail" && this.originPopUp==true){
      this.modalOption= "comics";      
      return;
    }
      this.dmModal= "modal";
  }
  this.modalOption= action;  
}

  public filter: string;
  public comicFavourite: comicObject;
  public selectedCharacter: selectedCharacterObject= null;
  public idComic: number;
  public modalOption: string;
  public actionFav: boolean =false;
  public actionCharacter: boolean =false;
  public getComics: boolean;
  public dmModal: string= "";
  public originPopUp: boolean;
}
