import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class comicService {

  constructor(private http: Http) { }


  getAllCharacterComics(characterId: number) {
    return this.http.get("http://gateway.marvel.com/v1/public/characters/"+characterId+"/comics?ts=1&apikey=80f798c08e54ac3b43ede4c80a111c3b&hash=881fbf9d24c8bd60574ee2fbab0810f0&limit=10")
      .map(res => res.json());
  }


  getComicByNameAndCharacter(characterId: number,filter: string) {
    return this.http.get("http://gateway.marvel.com/v1/public/characters/"+characterId+"/comics?ts=1&apikey=80f798c08e54ac3b43ede4c80a111c3b&hash=881fbf9d24c8bd60574ee2fbab0810f0&limit=10&titleStartsWith=" + filter)
      .map(res => res.json());
  }
  getComicById(comicId: number) {
    return this.http.get("http://gateway.marvel.com/v1/public/comics/"+comicId+"?ts=1&apikey=80f798c08e54ac3b43ede4c80a111c3b&hash=881fbf9d24c8bd60574ee2fbab0810f0")
      .map(res => res.json());
  }
} 


