import { Component } from '@angular/core';

@Component({
  selector: 'tk-card-content-converter',
  templateUrl: './tk-card-content-converter.component.html',
  styleUrls: ['./tk-card-content-converter.component.scss']
})
export class CardContentConverterComponent {

  public inBinary:boolean = true;
  public inOctal:boolean = false;
  public inDecimal:boolean = false;
  public inHex:boolean = false;

  public outBinary:boolean = false;
  public outOctal:boolean = false;
  public outDecimal:boolean = true;
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
    this.inputData = "111001";
    this.convert();
  }

  public clearAll() {
    this.clearKeys();
  }

  public convert() {

    if(this.inBinary && !this.outBinary){
      this.outputData = this.converFromBynari(this.inputData);
    }
    else if(this.inOctal && !this.outOctal){
      this.outputData = this.convertFromOctal(this.inputData);
    }
    else if(this.inDecimal && !this.outDecimal){
      this.outputData = this.convertFromDecimal(this.inputData);
    }
    else if(this.inHex && !this.outHex){
      this.outputData = this.convertFromHex(this.inputData);
    }else{
      this.outputData = this.inputData;
    }
  }

  public checkChars(){
    //TODO
    // console.log("chamou")
    // let data;
    // if(this.inBinary){
    //   let rgx = /^[0-1]{1,}$/;
    //   data = this.inputData.match(rgx);
    //   if(data !== null) { this.inputData = data.toString()}
    //   else { this.inputData = this.inputData.slice(0, -1);}
    // }
    // if(this.inOctal){
    //   let rgx = /^[0-7]{1,}$/;
    //   data = this.inputData.match(rgx);
    //   if(data !== null) { this.inputData = data.toString()}
    //   else { this.inputData = this.inputData.slice(0, -1);}
    // }
    // if(this.inDecimal){
    //   let rgx = /^[0-9]{1,}$/;
    //   data = this.inputData.match(rgx);
    //   if(data !== null) { this.inputData = data.toString()}
    //   else { this.inputData = this.inputData.slice(0, -1);}
    // }
    // if(this.inHex){
    //   let rgx = /\b[0-9A-F]+\b/;
    //   data = this.inputData.match(rgx);
    //   if(data !== null) { this.inputData = data.toString()}
    //   else { this.inputData = this.inputData.slice(0, -1);}
    // }
  }

  private convertToDecimal(data:any){

    if(this.inBinary) {
      data = parseInt(this.inputData,2).toString();
    }
    if(this.inOctal){
      data = parseInt(this.inputData,8).toString();
    }
    if(this.inHex){
      data  = parseInt(this.inputData,16).toString();
    }

    return data;
  }

  private converFromBynari(data:any){

    if(this.outOctal){
      data =  this.verifyNeddsForAddZero(parseInt(data, 2).toString(8),"octal");
    }
    if(this.outDecimal){
      data =  parseInt(data, 2).toString();
    }
    if(this.outHex){
      data =  this.addSpace("hex",parseInt(data, 2).toString(16)).toUpperCase();
    }
    return data;
  }

  private convertFromOctal(data:any){
    if(this.outBinary){
      data =  this.verifyNeddsForAddZero(parseInt(data, 8).toString(2),"bin");
    }
    if(this.outDecimal){
      data =  parseInt(data, 8).toString();
    }
    if(this.outHex){
      data =  this.addSpace("hex",parseInt(data, 8).toString(16)).toUpperCase();
    }
    return data;
  }

  private convertFromDecimal(data:any){

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

  private convertFromHex(data:any){
    if(this.outBinary){
      data =  this.verifyNeddsForAddZero(parseInt(data, 16).toString(2),"bin");
    }
    if(this.outOctal){
      data =  this.verifyNeddsForAddZero(parseInt(data, 16).toString(8),"octal");
    }
    if(this.outDecimal){
      data =  parseInt(data, 16).toString();
    }

    return data;
  }

  private verifyNeddsForAddZero(data:string,base:string){
    let rest;

    if(base === "bin"){
      rest = data.length % 4;
      if(rest > 0){
        rest = 4 - rest;
        data = this.addZero(rest,data);
        data = this.addSpace(base,data);
      }else{
        if(data.length>4){
          data = this.addSpace(base,data);
        }
      }
    }

    if(base === "octal"){
      rest = data.length % 3;

      if(rest > 0){
        rest = 3 - rest;
        data = this.addZero(rest,data)
        data = this.addSpace(base,data);
      }else{
        if(data.length>3){
          data = this.addSpace(base,data);
        }
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
      newData = data.split( /(?=(?:....)*$)/ );
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
    this.inBinary = true;
    this.inOctal = false;
    this.inDecimal = false;
    this.inHex = false;
    this.outBinary = false;
    this.outOctal = false;
    this.outDecimal = true;
    this.outHex = false;
    this.inputData = "";
    this.outputData = "";
  }


}
