 import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  title = 'Gabriel-HM Web';
  navLinks = [
    {'label':'ABOUT ME', 'route':'home'},
    // {'label':'RESUME', 'route': 'resume'},
    // {'label':'PORTFOLIO', 'route': 'portfolio'},
    // {'label':'BLOG', 'route': 'blog'},
    // {'label':'CONTACT ME', 'route': 'contactme'}
  ];
  hTagClick() {
     console.log("H Tag Clicked! :D");
    this.delete.emit('prueba');
  };
}
