import { Component } from '@angular/core';


@Component({
  selector: 'tk-card-content-text',
  templateUrl: './tk-card-content-text.component.html',
  styleUrls: ['./tk-card-content-text.component.scss']
})
export class CardContentTextComponent {

  public rollBackData: Array<string> = [];
  public dataGenarated: string = "";
  public totalChars: number = 0;

  public countChars() {
    this.totalChars = this.dataGenarated.length;
  }

  public transformInUppercase() {
    this.keepDataForRollBack();
    this.dataGenarated = this.dataGenarated.toUpperCase();
  }

  public transformInLowerCase(rollback:boolean = true) {
    if(rollback)
    {
      this.keepDataForRollBack();
    }

    this.dataGenarated = this.dataGenarated.toLowerCase();
  }

  public trasnformInPhraseFormat() {
    this.keepDataForRollBack();
    this.transformInLowerCase(false);
    for (let i = 0; i < this.dataGenarated.length; i++) {
      if (this.dataGenarated[i] === '.' || i === 0) {
        if (i < this.dataGenarated.length - 1) {
          if (i == 0) {
            this.dataGenarated = this.setCharAt(this.dataGenarated, i, this.dataGenarated[i].toUpperCase());
          }
          else {

            while (this.dataGenarated[i + 1] === ' ') {
              i++;
            }
            this.dataGenarated = this.setCharAt(this.dataGenarated, i + 1, this.dataGenarated[i + 1].toUpperCase());
          }
          i++;
        }
      }
    }
  }

  public trasnformInAlternateFormat() {
    this.keepDataForRollBack();
    for (let i = 0; i < this.dataGenarated.length; i++) {
      if (this.dataGenarated[i] !== '.' && this.dataGenarated[i] !== ' ') {
        if (i < this.dataGenarated.length && (i % 2 == 0)) {
          this.dataGenarated = this.setCharAt(this.dataGenarated, i, this.dataGenarated[i].toUpperCase());
        }
        else {
          if (i < this.dataGenarated.length) {
            this.dataGenarated = this.setCharAt(this.dataGenarated, i, this.dataGenarated[i].toLowerCase());
          }
        }
      }
    }
  }

  public removeExtraSpaces() {
    this.keepDataForRollBack();
    this.dataGenarated = this.dataGenarated.replace(/\s+/g, ' ').trim();
  }

  public removeAllSpaces() {
    this.keepDataForRollBack();
    this.dataGenarated = this.dataGenarated.replace(/\s/g,'').trim();
  }

  public clearTextArea() {
    this.keepDataForRollBack();
    this.dataGenarated = '';
    this.countChars();
  }

  public rollBackTransformation() {
    this.dataGenarated = this.rollBackData[0];
    this.rollBackData.shift();
  }

  private setCharAt(str: any, index: any, chr: any) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  private keepDataForRollBack() {
    let auxArray:Array<string> = [];
    auxArray.push(this.dataGenarated);

    this.rollBackData.forEach(data => {
      auxArray.push(data);
    })

    if(auxArray.length > 10)
    {
      auxArray.pop();
    }

    this.rollBackData = auxArray;
  }

}
