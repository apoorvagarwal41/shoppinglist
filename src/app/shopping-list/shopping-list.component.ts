import { Component, OnInit } from '@angular/core'
import Ingredient from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomato', 7)
  ]

  constructor() {}

  ngOnInit() {}

  add(item) {
    this.ingredients.push(item)
  }
}
