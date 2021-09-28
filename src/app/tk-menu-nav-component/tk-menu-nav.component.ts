import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'tk-menu-nav',
  templateUrl: './tk-menu-nav.component.html',
  styleUrls: ['./tk-menu-nav.component.scss']
})
export class MenuNavComponent {

  @Output() changeMainCardContent = new EventEmitter;

  public optionSelected(option:string){
    this.changeMainCardContent.emit(option);
  }

}
