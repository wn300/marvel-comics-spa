import { Component , Input, Output,EventEmitter,Injectable, Pipe} from '@angular/core';
import { characterService } from '../../../CORE/services/character.service';
import { favouriteService } from '../../../CORE/services/favourite.service';
import { characterObject } from "../../../CORE/models/characterModel";
import { selectedCharacterObject } from "../../../CORE/models/selectedCharacterModel";

@Component({
  selector: 'character-view',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css','../app.component.css'],
  providers: [characterService, favouriteService],
})
export class CharacterComponent {
  page: number = 1;
  public order: string = '-modified';

  public ArrayResult: Array<characterObject> = [];
  rdmFavourites: Array<any>=[];

  private filterSuperHero: string = "";
  public SendCharacter : selectedCharacterObject = new selectedCharacterObject();

  @Input()
  set recivedfilter(recivedValue: string) {
    this.filterSuperHero = recivedValue;
    this.getCharacters();
  }



 @Output() selectedComic: EventEmitter<number> = new EventEmitter<number>();
 @Output() selectedCharacter: EventEmitter<selectedCharacterObject> = new EventEmitter<selectedCharacterObject>();

  constructor(private API: characterService, private FavService: favouriteService) {
    this.getCharacters();    
  }

  getCharacters() {
    if (this.filterSuperHero == "" || this.filterSuperHero == null) {
      this.API.getAllCharacters(this.order).subscribe((data) => { this.ArrayResult = data.data.results });
      return;
    }
    this.API.getCharactersByName(this.filterSuperHero, this.order).subscribe((data) => { this.ArrayResult = data.data.results });    
  }

  sortSearch(newValueSortBy:string){
    this.order = newValueSortBy;
    this.getCharacters();
  }


  over(id: string) {
    document.getElementById("TitleName" + id).style.color = "#EC1E22"
  }

  leave(id: string) {
    document.getElementById("TitleName" + id).style.color = "#494443"
  }

  viewComics(Character: characterObject){
    this.SendCharacter.id = Character.id;
    this.SendCharacter.name = Character.name;
    this.SendCharacter.description = Character.description;
    this.SendCharacter.image = Character.thumbnail.path+'.'+Character.thumbnail.extension;
    this.selectedCharacter.emit(this.SendCharacter);
  }
  viewComicDetails(resourceURI: string){
    var idComic: number =  +resourceURI.substr(43);
    this.selectedComic.emit(idComic)
  }
  randomComics(){    
    let comicsRandom: Array<number>=[];
    let arrayNumbers: Array<randomInterface>=[];
    for(let i= arrayNumbers.length; i < 3; i= arrayNumbers.length){
      let randomNumber: number = Math.floor(Math.random() * 10) + 1 ;
      if(arrayNumbers.filter(num => num.valor == randomNumber).length == 0){
        let numins: randomInterface= {valor:randomNumber};
        arrayNumbers.push(numins);        
      }      
    }
    for(let i= 0; i <3; i++)
    {             
     comicsRandom.push(this.ArrayResult[arrayNumbers[i].valor].comics.items[0].id);
    }  
        this.FavService.saveRandomComics(comicsRandom);    
  }  
}
interface randomInterface{
  valor: number;
}
