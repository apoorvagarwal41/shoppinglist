import { Component, OnInit } from '@angular/core'
import RecipieModel from '../recipie.model'
import { RecepieService } from '../../reciepe.service'
@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
  details: RecipieModel
  constructor(private recepieService: RecepieService) {}
  ngOnInit() {
    this.details = this.recepieService.currentRecepie
  }
}
