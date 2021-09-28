import { Component } from '@angular/core';


@Component({
  selector: 'tk-card-content-sql-view',
  templateUrl: './tk-card-content-sql-view.component.html',
  styleUrls: ['./tk-card-content-sql-view.component.scss']
})
export class CardContentSqlViewComponent {

  public createView:boolean = false;
  public alterView:boolean = false;
  public dropView:boolean = true;
  public coment:string = "";
  public schemaName:string = "";
  public viewName:string = "";
  public inputData:string = "";
  public outputData:string = "";

  public selectCheckBox(option:string){
    switch (option) {
      case 'createView':
        this.createView = !this.createView;
        this.clearOtherCheckBoxes('createView');
        break;

      case 'alterView':
        this.alterView = !this.alterView;
        this.clearOtherCheckBoxes('alterView');
        break;

      case 'dropView':
      this.dropView = !this.dropView;
      this.clearOtherCheckBoxes('dropView');
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

    if(this.viewName === "")
    {
      return `kli text translate add "${text}" ${keyType+key} 1${lineBreaker}`;
    }
    else{
      return `kli text translate add "${text}" ${keyType+contextToUse+key} 1${lineBreaker}`;
    }
  }

  private getKeyType(){
   if(this.createView){
     return "";
   }
   if(this.alterView){
     return "JS__ANGULAR1__";
   }
   if(this.dropView){
     return "JS__COMMON__";
   }
   return "";
  }

  private getContext(){
    let data = this.viewName.split('.').join('_').toUpperCase();
    return `${data}__`
  }
  private clearOtherCheckBoxes(option:string){
    if(option === 'createView')
    {
      this.alterView = false;
      this.dropView = false;
    }
    if(option === 'angularJsKey')
    {
      this.createView = false;
      this.dropView = false;
    }
    if(option === 'dropView')
    {
      this.createView = false;
      this.alterView = false;
    }
  }

  public fillWithExempleData(){
   this.clearKeys();
    this.viewName='report.builder';
    this.inputData = `query.must.have.tenant/Consulta precisa ter um cliente\nquery.not.found/Consulta não encontrada`;
    this.outputData = `kli text translate add "Consulta precisa ter um cliente" JS__COMMON__REPORT_BUILDER__QUERY_MUST_HAVE_TENANT 1\nkli text translate add "Consulta não encontrada" JS__COMMON__REPORT_BUILDER__QUERY_NOT_FOUND 1`;
  }

  public clearAll() {
    this.clearKeys();
    this.viewName='';
    this.inputData = '';
    this.outputData = '';
  }

  private clearKeys(){
    this.createView = true;
    this.alterView = false;
    this.dropView = false;
  }

}
