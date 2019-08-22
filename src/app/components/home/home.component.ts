import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-container',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  title = 'Home';

  onClickMe() {
    console.log("Clicked! :D");
    this.delete.emit(this.mediaItem);
  };
}
