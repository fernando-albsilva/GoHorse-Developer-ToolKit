import { Component } from '@angular/core';

@Component({
  selector: 'tk-card-content-translate-keys',
  templateUrl: './tk-card-content-translate-keys.component.html',
  styleUrls: ['./tk-card-content-translate-keys.component.scss']
})
export class CardContentTranslateKeysComponent {

  public generalKey:boolean = false;
  public angularJsKey:boolean = false;
  public angular2Key:boolean = true;
  public context:string = "";
  public inputData:string = "";
  public outputData:string = "";


  public selectCheckBox(option:string){
    switch (option) {
      case 'generalKey':
        this.generalKey = !this.generalKey;
        this.clearOtherCheckBoxes('generalKey');
        break;

      case 'angularJsKey':
        this.angularJsKey = !this.angularJsKey;
        this.clearOtherCheckBoxes('angularJsKey');
        break;

      case 'angular2Key':
      this.angular2Key = !this.angular2Key;
      this.clearOtherCheckBoxes('angular2Key');
      break;

      default:
        break;
    }
  }

  public generateKeys(){

    let slicedLines: Array<string> = [];
    let outPutKeys:string = "";

    slicedLines = this.inputData.split('\n');
    console.log(slicedLines);

    slicedLines.forEach(line => {
      outPutKeys +=this.transformLine(line);
    });

    this.outputData = outPutKeys;
  }

  private transformLine(line:string){
    let keyText = line.split('/');
    let key = keyText[0];
    let text = keyText[1];
    let keyType = this.getKeyType();
    let contextToUse = this.getContext();
    let lineBreaker = '\n';
    key = key.split('.').join('_').toUpperCase();

    if(text === undefined || text === null || text === "")
    {
      text = "!!!!!!TEXTO NÃO INFORMADO!!!!!!!";
    }

    if(key === undefined || key === null || key === "")
    {
      key = "!!!!!!CHAVE NÃO INFORMADA!!!!!!!";
    }

    if(this.context === "")
    {
      return `kli text translate add "${text}" ${keyType+key} 1${lineBreaker}`;
    }
    else{
      return `kli text translate add "${text}" ${keyType+contextToUse+key} 1${lineBreaker}`;
    }
  }

  private getKeyType(){
   if(this.generalKey){
     return "";
   }
   if(this.angularJsKey){
     return "JS__ANGULAR1__";
   }
   if(this.angular2Key){
     return "JS__COMMON__";
   }
   return "";
  }

  private getContext(){
    let data = this.context.split('.').join('_').toUpperCase();
    return `${data}__`
  }
  private clearOtherCheckBoxes(option:string){
    if(option === 'generalKey')
    {
      this.angularJsKey = false;
      this.angular2Key = false;
    }
    if(option === 'angularJsKey')
    {
      this.generalKey = false;
      this.angular2Key = false;
    }
    if(option === 'angular2Key')
    {
      this.generalKey = false;
      this.angularJsKey = false;
    }
  }

  public fillWithExempleData(){
   this.clearKeys();
    this.context='report.builder';
    this.inputData = `query.must.have.tenant/Consulta precisa ter um cliente\nquery.not.found/Consulta não encontrada`;
    this.outputData = `kli text translate add "Consulta precisa ter um cliente" JS__COMMON__REPORT_BUILDER__QUERY_MUST_HAVE_TENANT 1\nkli text translate add "Consulta não encontrada" JS__COMMON__REPORT_BUILDER__QUERY_NOT_FOUND 1`;
  }

  public clearAll() {
    this.clearKeys();
    this.context='';
    this.inputData = '';
    this.outputData = '';
  }

  private clearKeys(){
    this.angular2Key = true;
    this.generalKey = false;
    this.angularJsKey = false;
  }

}
