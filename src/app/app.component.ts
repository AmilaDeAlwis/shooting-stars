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

  visibleItems : WishItem[] = this.items;

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value : any){
    if (value == '0'){
      this.visibleItems = this.items;
    } else if (value == '1'){
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
