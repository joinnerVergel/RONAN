import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { mf_getAuthentication, mf_cleanAuthentication, urlMiddleLayer } from './url';

export interface data_Agreement {
  IdMotivoNoPago: number;
  DiasSuspensionGestion:number;
  Descuento:number;
}
export interface data_Authentication {
  aplicaDescuento: boolean;
  nombre:string;
  saldo:number;
  token:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public obj_Authentication:data_Authentication={aplicaDescuento:null,nombre:null,saldo:null,token:null};
  public dataAgreement:data_Agreement=null
  constructor(private http: HttpClient) { }

  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      })
    };

    return httpOptions;

  }

  clearAuthentication() {
    this.obj_Authentication = {aplicaDescuento:null,nombre:null,saldo:null,token:null};
    this.dataAgreement=null;
    // console.log("LImpiado");
  }



  isAuthenticated(){
    // console.log()
    if(this.obj_Authentication.token!=null){
      return true;
    }
    else{
      return false;
    }
  }

  setAuthentication(data:any){
    let x:boolean=false;
    if(data.aplicaDescuento=="true"){
      x=true;
    }
    this.obj_Authentication={aplicaDescuento:x,saldo:+(data.saldo.replace(",",".")),nombre:data.nombre,token:data.token};
    // console.log( this.obj_Authentication);
    this.dataAgreement={DiasSuspensionGestion:null,IdMotivoNoPago:null,Descuento:null};
  }
  getAuthentication(data:any){
    let datos:any={
      url:mf_getAuthentication,
      objeto:data,
      metodo:"post",
      token: this.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer, datos, this.getHttpOptions()).pipe();
  }

  cleanAuthentication(){
    let datos:any={
      url:mf_cleanAuthentication,
      metodo:"post",
      token: this.obj_Authentication.token
    }
    return this.http.post<any>(urlMiddleLayer, datos,this.getHttpOptions());
  }
  
}
