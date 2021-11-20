import { Component } from '@angular/core';

@Component({
  selector: 'tk-card-password-generator',
  templateUrl: './tk-card-password-generator.component.html',
  styleUrls: ['./tk-card-password-generator.component.scss']
})
export class CardPasswordGeneratorComponent {

  public passwordLength:any;
  public useCapitalLetters:boolean = false;
  public useLowerLetters:boolean = false;
  public useNumbers:boolean = false;
  public useSymbols:boolean = false;
  public dataGenarated:string = "";


  public selectCheckBox(option:string){
    switch (option) {
      case 'useCapitalLetters':
        this.useCapitalLetters = !this.useCapitalLetters;
        break;

      case 'useLowerLetters':
        this.useLowerLetters = !this.useLowerLetters;
        break;

      case 'useNumbers':
        this.useNumbers = !this.useNumbers;
        break;

      case 'useSymbols':
        this.useSymbols = !this.useSymbols;
        break;

      default:
        break;
    }
  }

  public removeCharThatAreNotNumbers(){
    this.passwordLength = this.passwordLength.toString().replace(/\D/g, '');
    if(parseInt(this.passwordLength) < 0) {this.passwordLength = 1;}
    if(parseInt(this.passwordLength) > 100000) {this.passwordLength = 100000;}

  }

  public generatePassword(){

    this.clearDataGenerated();

    const capitalLetters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnoprstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.useCapitalLetters) {validChars += capitalLetters;}
    if(this.useLowerLetters) {validChars += lowerLetters;}
    if(this.useNumbers) {validChars += numbers;}
    if(this.useSymbols) {validChars += symbols;}

    for (let index = 0; index < this.passwordLength; index++) {
      this.dataGenarated += validChars.charAt(this.getRandomInt(validChars.length -1));
    }
  }

  private getRandomInt(maxValue: number) {
    return Math.floor(Math.random() * (maxValue));
  }

  private clearDataGenerated(){
    this.dataGenarated = "";
  }

}
