import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'tk-menu-side-tools',
  templateUrl: './tk-menu-side-tools.component.html',
  styleUrls: ['./tk-menu-side-tools.component.scss']
})
export class MenuSideTools {

  @Output() changeMainCardContent: any = new EventEmitter();


  public optionSelected(option:string){
    this.changeMainCardContent.emit(option);
  }
}
