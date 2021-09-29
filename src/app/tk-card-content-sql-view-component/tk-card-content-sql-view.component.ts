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

  public generateView(){

    this.outputData = "";
    // let slicedLines: Array<string> = [];
    // let outPutKeys:string = "";

    // slicedLines = this.inputData.split('\n');
    // console.log(slicedLines);

    // slicedLines.forEach(line => {
    //   outPutKeys +=this.transformLine(line);
    // });

    this.outputData = this.transformLine();
  }

  private transformLine(){

    let lineBreaker='\n';
    let viewCode = "";
    this.verifySchema();
    viewCode = `${this.addComentCommand()}${lineBreaker}`;
    viewCode += `${this.addCreateCommand()}${lineBreaker}`;
    viewCode += `${this.addSelectCommand()}${lineBreaker}`;

    return viewCode;

  }

  private verifySchema(){
    if(this.schemaName === '')
    {
      this.schemaName = "dbo";
    }
  }

  private addComentCommand(){
    let lineBreaker='\n';
    if(this.createView)
    {
      return `-- Criando view ${this.viewName} ${this.coment}${lineBreaker}`
    }
    if(this.alterView)
    {
      return `-- Alterando view ${this.viewName} ${this.coment}${lineBreaker}`
    }
    if(this.dropView)
    {
      return `-- Deletando view ${this.viewName} ${this.coment}${lineBreaker}`
    }
    return "";
  }

  private addCreateCommand(){
    let lineBreaker='\n';
    let verifyIfExist = `DROP VIEW IF EXISTS [${this.schemaName}].[${this.viewName}]${lineBreaker}${lineBreaker}GO${lineBreaker}${lineBreaker}`;
    if(this.createView)
    {
      return `${verifyIfExist}CREATE VIEW [${this.schemaName}].[${this.viewName}]`
    }
    if(this.alterView)
    {
      return `ALTER VIEW [${this.schemaName}].[${this.viewName}]`
    }
    if(this.dropView)
    {
      return `DROP VIEW [${this.schemaName}].[${this.viewName}]`
    }
    return "";
  }

  private addSelectCommand(){
    let lineBreaker='\n';
    if(this.dropView)
    {
      return `${lineBreaker}GO`
    }else{
      return `${lineBreaker}AS${lineBreaker}${this.inputData}${lineBreaker}${lineBreaker}GO`
    }
  }

  private clearOtherCheckBoxes(option:string){
    if(option === 'createView')
    {
      this.alterView = false;
      this.dropView = false;
    }
    if(option === 'alterView')
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
    this.coment = "para atender a demanda."
    this.schemaName = "UserContext";
    this.viewName='FuncionarioView';
    this.inputData = `SELECT\n  FuncName as [Name]\n, FuncCpf as [Cpf]\nFROM\n  [dbo].[Usuario]\nWHERE\n  FuncDeleted = 0`;
    this.generateView();
  }

  public clearAll() {
    this.clearKeys();
    this.coment = '';
    this.schemaName = '';
    this.viewName = '';
    this.inputData = '';
    this.outputData = '';
  }

  private clearKeys(){
    this.createView = true;
    this.alterView = false;
    this.dropView = false;
  }

}
