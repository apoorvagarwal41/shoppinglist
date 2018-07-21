import Recipie from './recipies/recipie.model'
import { LoggingService } from './logging.service'
import { Injectable, EventEmitter } from '@angular/core'
// gotcha: to inject a service in a service we need to provide the service in the app.module.ts

@Injectable()
export class RecepieService {
  recepies: Recipie[] = [
    new Recipie(
      'Indian Chicken',
      'Something is fried along with it',
      'https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_960_720.jpg'
    ),
    new Recipie(
      'Smoked Chicken',
      'Something is fried along with it',
      'https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_960_720.jpg'
    ),
    new Recipie(
      'Grilled Chicken',
      'Something is fried along with it',
      'https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_960_720.jpg'
    )
  ]
  currentRecepie: Recipie
  selectrecepie = new EventEmitter<Recipie>()
  constructor(private loggingService: LoggingService) {}

  addNewRecepie = (recepie: Recipie) => {
    this.recepies.push(recepie)
  }
  setCurrentRecepie = (recepie: Recipie) => {
    this.currentRecepie = recepie
  }
}
