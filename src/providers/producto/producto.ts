import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductoProvider Provider');
  }

  obtenerProductos(){
    return this.http.get('assets/data.json');
  }

}
