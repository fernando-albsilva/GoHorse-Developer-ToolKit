import { Component } from '@angular/core';


@Component({
  selector: 'tk-card-content-text',
  templateUrl: './tk-card-content-text.component.html',
  styleUrls: ['./tk-card-content-text.component.scss']
})
export class CardContentTextComponent {

  public dataGenarated:string = "";
  public totalChars:number = 0;

  public countChars(){
    this.totalChars = this.dataGenarated.length;
  }

  public transformInUppercase(){
    this.dataGenarated = this.dataGenarated.toUpperCase();
  }

  public transformInLowerCase(){
    this.dataGenarated = this.dataGenarated.toLowerCase();
  }

  public trasnformInPhraseFormat(){

   this.transformInLowerCase();
   for (let i = 0; i < this.dataGenarated.length; i++) {
    if ( this.dataGenarated[i] === '.' || i === 0)
    {
      if(i < this.dataGenarated.length - 1)
      {
        if(i == 0)
        {
          this.dataGenarated = this.setCharAt(this.dataGenarated,i,this.dataGenarated[i].toUpperCase());
        }
        else{

          while( this.dataGenarated[i+1] === ' ')
          {
            i++;
          }
          this.dataGenarated = this.setCharAt(this.dataGenarated,i+1,this.dataGenarated[i+1].toUpperCase());
        }
        i++;
      }
    }
   }
  }

  public trasnformInAlternateFormat(){
    for (let i = 0; i < this.dataGenarated.length; i++) {
      if ( this.dataGenarated[i] !== '.' &&  this.dataGenarated[i] !== ' ')
      {
        if(i < this.dataGenarated.length && (i % 2 == 0))
        {
            this.dataGenarated = this.setCharAt(this.dataGenarated,i,this.dataGenarated[i].toUpperCase());
        }
        else
        {
          if(i < this.dataGenarated.length)
          {
            this.dataGenarated = this.setCharAt(this.dataGenarated,i,this.dataGenarated[i].toLowerCase());
          }
        }
      }
     }
  }

  public clearTextArea(){
    this.dataGenarated = '';
    this.countChars();
  }


  private setCharAt(str:any,index:any,chr:any) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
  }
}
