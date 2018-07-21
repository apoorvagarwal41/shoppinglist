import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core'
import Ingredient from '../../shared/ingredients.model'
import { NAMED_ENTITIES } from '../../../../node_modules/@angular/compiler'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameInput
  @ViewChild('amountinput') amountinput
  @Output() addRecipie = new EventEmitter<Ingredient>()
  ingredient: Ingredient
  constructor() {}

  ngOnInit() {}

  add() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountinput.nativeElement.value
    if (name && amount) {
      this.ingredient = new Ingredient(name, amount)
      this.addRecipie.emit(this.ingredient)
      this.clear()
    }
  }
  clear() {
    this.nameInput.nativeElement.value = ''
    this.amountinput.nativeElement.value = ''
    this.ingredient = undefined
  }
}
