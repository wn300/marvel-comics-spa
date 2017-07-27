import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class characterService {

  constructor(private http: Http) { }


  getAllCharacters(orderBy: string) {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=80f798c08e54ac3b43ede4c80a111c3b&hash=881fbf9d24c8bd60574ee2fbab0810f0&limit=50&orderBy="+orderBy)
      .map(res => res.json());
  }


  getCharactersByName(filter: string, orderBy: string) {
    return this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=80f798c08e54ac3b43ede4c80a111c3b&hash=881fbf9d24c8bd60574ee2fbab0810f0&limit=10&nameStartsWith=" + filter+"&orderBy="+orderBy)
      .map(res => res.json());
  }
} 