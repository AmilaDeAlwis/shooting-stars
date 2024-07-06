import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new WishItem('Build 100 houses in Mexico'),
    new WishItem('Build 10 schools in Nigeria'),
    new WishItem('Build 5 football pitches in Argentina')
  ];
  title = 'Shooting Stars';
}
