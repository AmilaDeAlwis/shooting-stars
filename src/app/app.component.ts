import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

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

  listFilter : String = '0';

  get visibleItems() : WishItem[]{
    let value = this.listFilter;
    if (value == '0'){
      return this.items;
    } else if (value == '1'){
      return this.items.filter(item => !item.isComplete);
    } else {
      return this.items.filter(item => item.isComplete);
    }
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
