import { Component, Input, Output, EventEmitter, Injectable, Pipe} from '@angular/core';
import { comicService } from '../../../CORE/services/comic.service';
import { comicObject } from "../../../CORE/models/comicModel";
import { selectedCharacterObject } from "../../../CORE/models/selectedCharacterModel";

@Component({
  selector: 'comics-view',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css','../app.component.css'],
  providers: [comicService],
})
export class ComicsComponent
{
    public ComicsArray: Array<comicObject> = [];
    //  public page: string;
    private SearchFilter: string="";
    public CharacterSelected : selectedCharacterObject;
    @Input() 
     set recivedcharacter(recivedcharacter: selectedCharacterObject){
        this.CharacterSelected = recivedcharacter;
        this.getComics();
    }
     @Input()
   set actionCharacter(action: boolean){
       
     this.getComics();
   }
    @Output() selectedComic: EventEmitter<number> = new EventEmitter<number>();

    
    set searchComic(sendValue: string){  
    this.SearchFilter= sendValue;
    this.getComics();
  }

    constructor(private API: comicService){
        this.getComics();
    }
    getComics(){  
        if(this.CharacterSelected != undefined)
        {
            if(this.SearchFilter != ""){               
                this.API.getComicByNameAndCharacter(this.CharacterSelected.id,this.SearchFilter).subscribe((data) => { this.ComicsArray = data.data.results });
                return;
            }        
            this.API.getAllCharacterComics(this.CharacterSelected.id).subscribe((data) => { this.ComicsArray = data.data.results });
        }
    }
    viewComicDetails(idComic: number){
    this.selectedComic.emit(idComic)
  }

}