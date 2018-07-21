import { Component, OnInit } from '@angular/core'
import RecipieModel from './recipie.model'
import { RecepieService } from '../reciepe.service'
@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  currentRecepie: RecipieModel
  constructor(private recepieService: RecepieService) {}
  ngOnInit() {
    this.currentRecepie = this.recepieService.currentRecepie
  }
}
