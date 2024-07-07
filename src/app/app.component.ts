import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Build 100 houses in Mexico'),
    new WishItem('Build 10 schools in Nigeria', true),
    new WishItem('Build 5 football pitches in Argentina')
  ];

  title = 'Shooting Stars';

  newWishText = '';

  listFilter : any = '0';

  get visibleItems() : WishItem[]{
    return this.items.filter(filters[this.listFilter]);
  };

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
