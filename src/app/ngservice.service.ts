import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>{
   return this._http.get<any>("http://localhost:8099/getproductlist");
  }
  addproductToRemote(product : Product):Observable<any>{
    return this._http.post<any>("http://localhost:8099/addproduct",product);
  }
  fetchProductByidFromRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:8099/getproductbyid/"+id);
   }
   deleteProductByidFromRemote(id : number):Observable<any>{
    return this._http.delete<any>("http://localhost:8099/deleteproductbyid/"+id);
   }
}
