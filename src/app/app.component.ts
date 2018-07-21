import { Component, ViewChild, OnInit, ContentChild } from '@angular/core'
import { LoggingService } from './logging.service'
import { RecepieService } from './reciepe.service'
import Recipie from './recipies/recipie.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // gotcha: when we include the class of the service in the providers array we create a new instance of that service class so we want the service to hold some data and that data to be used by many components we need to keep one instance of the service only
  // providers: [RecepieService]
})
export class AppComponent {
  @ViewChild('inputvalue') inputvalue
  currentView: String = 'recipie'
  current
  test
  // @ContentChild used to access the local reference of the content passed by some other component
  constructor(
    private loggingService: LoggingService,
    private recepieService: RecepieService
  ) {}

  clginput(input) {
    console.log('object')
    console.log(this.inputvalue)
  }

  navigate(location) {
    this.currentView = location
  }
}
