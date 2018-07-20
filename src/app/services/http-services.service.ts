import { Injectable } from '@angular/core';
//Angular Http module
import { HttpClientModule }  from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor( private http : HttpClientModule ) { }

  createNewPost(){

  }
}
