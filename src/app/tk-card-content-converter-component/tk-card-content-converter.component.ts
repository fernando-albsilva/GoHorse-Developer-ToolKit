import { Component } from '@angular/core';

@Component({
  selector: 'tk-card-content-converter',
  templateUrl: './tk-card-content-converter.component.html',
  styleUrls: ['./tk-card-content-converter.component.scss']
})
export class CardContentConverterComponent {

  public inBinary:boolean = false;
  public inOctal:boolean = false;
  public inDecimal:boolean = false;
  public inHex:boolean = true;

  public outBinary:boolean = true;
  public outOctal:boolean = false;
  public outDecimal:boolean = false;
  public outHex:boolean = false;

  public context:string = "";
  public inputData:string = "";
  public outputData:string = "";



  public selectCheckBox(option:string){
    switch (option) {
      case 'inBinary':
        this.inBinary = !this.inBinary;
        this.clearOtherCheckBoxes('inBinary');
        break;

      case 'inOctal':
        this.inOctal = !this.inOctal;
        this.clearOtherCheckBoxes('inOctal');
        break;

      case 'inDecimal':
        this.inDecimal = !this.inDecimal;
        this.clearOtherCheckBoxes('inDecimal');
        break;

      case 'inHex':
        this.inHex = !this.inHex;
        this.clearOtherCheckBoxes('inHex');
        break;

      case 'outBinary':
        this.outBinary = !this.outBinary;
        this.clearOtherCheckBoxes('outBinary');
        break;

      case 'outOctal':
        this.outOctal = !this.outOctal;
        this.clearOtherCheckBoxes('outOctal');
        break;

      case 'outDecimal':
        this.outDecimal = !this.outDecimal;
        this.clearOtherCheckBoxes('outDecimal');
        break;

      case 'outHex':
        this.outHex = !this.outHex;
        this.clearOtherCheckBoxes('outHex');
        break;

      default:
        break;
    }
  }

  private clearOtherCheckBoxes(option:string){

    switch (option) {
      case 'inBinary':
        this.inOctal = false;
        this.inDecimal = false;
        this.inHex = false;
        break;

      case 'inOctal':
        this.inBinary = false;
        this.inDecimal = false;
        this.inHex = false;
        break;

      case 'inDecimal':
        this.inBinary = false;
        this.inOctal = false;
        this.inHex = false;
        break;

      case 'inHex':
        this.inBinary = false;
        this.inOctal = false;
        this.inDecimal = false;
        break;

      case 'outBinary':
        this.outOctal = false;
        this.outDecimal = false;
        this.outHex = false;
        break;

      case 'outOctal':
        this.outBinary = false;
        this.outDecimal = false;
        this.outHex = false;
        break;

      case 'outDecimal':
        this.outBinary = false;
        this.outOctal = false;
        this.outHex = false;
        break;

      case 'outHex':
        this.outBinary = false;
        this.outOctal = false;
        this.outDecimal = false;
        break;

      default:
        break;
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

  public convert() {

    if(this.inBinary || this.inOctal || this.inHex && this.outDecimal)
    {
      this.outputData = this.convertToDecimalAndOthers(this.inputData);
    }
    else if( this.inDecimal && this.outBinary || this.outOctal || this.outHex)
    {
      this.outputData = this.convertFromDecimalAndOthers(this.inputData).toString();
    }
    else{
      this.outputData = this.inputData;
    }



  }

  private convertToDecimalAndOthers(data:any){

    if(this.inBinary) {
      data = parseInt(this.inputData).toString(2);
    }
    if(this.inOctal){
      data = parseInt(this.inputData).toString(8);
    }
    if(this.inHex){
      data  = parseInt(this.inputData).toString(16);
    }

    return data;
  }

  private convertFromDecimalAndOthers(data:any){

    // if(this.outBinary) {
    //   data = parseInt(this.inputData,2);
    // }
    // if(this.outOctal){
    //   data = parseInt(this.inputData,8);
    // }
    // if(this.outHex){
    //   data  = parseInt(this.inputData,16);
    // }
    if(this.outBinary) {
      data = this.verifyNeddsForAddZero(parseInt(this.inputData).toString(2),"bin");
    }
    if(this.outOctal){
      data = this.verifyNeddsForAddZero(parseInt(this.inputData).toString(8),"octal");
    }
    if(this.outHex){
      data  = this.addSpace("hex",parseInt(this.inputData).toString(16)).toUpperCase();
    }

    return data;
  }

  private verifyNeddsForAddZero(data:string,base:string){
    let rest;

    if(base === "bin"){
      rest = data.length % 4;
      if(rest > 0){
        data = this.addZero(rest,data);
        data = this.addSpace(base,data);
      }
    }

    if(base === "octal"){
      rest = data.length % 3;

      if(rest > 0){
        rest = 3 - rest;
        data = this.addZero(rest,data)
        data = this.addSpace(base,data);
      }
    }

    return data;
  }

  private addZero(quantity:number,data:string){
    for (let index = 1; index <= quantity; index++) {
      data = `0${data}`;
    }

    return data;
  }

  private addSpace(base:string,data:string){
    if((base === "bin") && data.length > 4)
    {
      let newData;
      newData = data.match(/.{1,4}/g);
      if(newData !== null){
        data = newData.join(' ');
      };
      return data
    }
    if(base === "octal" && data.length > 3)
    {
      let newData;
      newData = data.match(/.{1,3}/g);
      if(newData !== null){
        data = newData.join(' ');
      };
      return data
    }
    if(base === "hex" && data.length > 4)
    {
      let newData;
      newData = data.split( /(?=(?:....)*$)/ );
      if(newData !== null){
        data = newData.join(' ');
      };
      return data
    }

    return data;
  }

  private clearKeys(){
    this.inHex = true;
    this.inBinary = false;
    this.inOctal = false;
  }

}
