import { Component, OnInit, Input, HostListener } from '@angular/core'
import Recipie from '../../recipie.model'
import { RecepieService } from '../../../reciepe.service'
@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input('recipieData') data: Recipie
  // @HostListener('click')
  // sendDetails = () => {
  //   this.recepieService.currentRecepie = this.data
  //   console.log(this.recepieService.currentRecepie)
  // }
  constructor(private recepieService: RecepieService) {}
  ngOnInit() {}
}
