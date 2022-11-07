import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  //x!:string
  //y?:string

constructor(private _http:HttpClient) { 

}
getComments():Observable<Object>{
  return this._http.get("https://api.instantwebtools.net/v1/airlines")

}




}
