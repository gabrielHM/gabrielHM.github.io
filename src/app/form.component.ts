import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-container',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  title = 'Form';

  onClickMe() {
    console.log("Clicked! :D");
    this.delete.emit(this.mediaItem);
  };
}
