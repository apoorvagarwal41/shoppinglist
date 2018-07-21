import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output('navigate') navigation = new EventEmitter<string>()

  ngOnInit() {}
  navigate(e, location) {
    this.navigation.emit(location)
  }
}
