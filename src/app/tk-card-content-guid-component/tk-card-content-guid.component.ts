import { Component } from '@angular/core';

import { Guid } from 'guid-typescript';
@Component({
  selector: 'tk-card-content-guid',
  templateUrl: './tk-card-content-guid.component.html',
  styleUrls: ['./tk-card-content-guid.component.scss']
})
export class CardContentGuidComponent {

  public quantity:any;
  public braces:boolean = false;
  public hypens:boolean = false;
  public uppercase:boolean = false;
  public dataGenarated:string = "";


  public selectCheckBox(option:string){
    switch (option) {
      case 'braces':
        this.braces = !this.braces;
        break;

      case 'hypens':
        this.hypens = !this.hypens;
        break;

      case 'uppercase':
      this.uppercase = !this.uppercase;
      break;

      default:
        break;
    }
  }

  public removeCharThatAreNotNumbers(){

    this.quantity = this.quantity.toString().replace(/\D/g, '');
    if(parseInt(this.quantity) > 100000)
    {
      this.quantity = 100000;
    }
  }

  public generateGuid(){
    const linebreak = '\n';
    this.dataGenarated = "";

    for(let i = 0; i < parseInt(this.quantity); i++ )
    {
      let guid = Guid.create().toString();

      if(this.uppercase)
      {
        guid = guid.toUpperCase();
      }

      if(this.braces)
      {
        guid = `{${guid}}`;
      }

      if(!this.hypens){
        guid = guid.replace(/-/g, "");
      }
      this.dataGenarated += guid + linebreak;
    }
  }
}
