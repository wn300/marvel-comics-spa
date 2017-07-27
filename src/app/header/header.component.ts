import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css'],
})
export class HeaderComponent {
  @Input() superHero: string;
  @Output() superHeroChange: EventEmitter<string> = new EventEmitter();
 
  set searchHero(sendValue: string){  
    this.superHeroChange.emit(sendValue)
  }

  constructor() {}
}
