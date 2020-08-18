import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  public getItems(): Observable<any>{
    return this.http.get('http://localhost:8080/item/get/all');
  }

/*  public getUserByEmail(email){
    return this.http.get('http://localhost:9090//findUser/'+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }*/
}
