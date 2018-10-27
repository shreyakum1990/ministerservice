import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Http2ServerRequest } from 'http2';


@Injectable({
  providedIn: 'root'
})
export class MinisterService {

  constructor(private http : Http) { }
  createEmp(emp){
    return this.http.post("https://minister-b200a.firebaseio.com/ministers.json",emp)
  }

  getEmp(emp){
    return this.http.get("https://minister-b200a.firebaseio.com/ministers.json",emp)
  }

}
