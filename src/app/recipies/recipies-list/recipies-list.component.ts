import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import RecipieModel from '../recipie.model'
import { RecepieService } from '../../reciepe.service'

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: RecipieModel[]
  test
  constructor(private recepieService: RecepieService) {}
  ngOnInit() {
    this.recipies = this.recepieService.recepies
  }
  setData(recepie) {
    this.recepieService.currentRecepie = recepie
  }
}
