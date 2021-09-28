import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tk-card-content-sql-component',
  templateUrl: './tk-card-content-sql.component.html',
  styleUrls: ['./tk-card-content-sql.component.scss']
})
export class CardContentSqlComponent {

  @Output() changeMainCardContent: any = new EventEmitter();


  public optionSelected(option:string){
    this.changeMainCardContent.emit(option);
  }

}
