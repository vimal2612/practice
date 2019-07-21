import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class LiteService {

//   constructor() { }
// }

@Injectable({
  providedIn: 'root'
  })
export class LiteService {

  constructor(private _http:HttpClient) { }

  send(body:any){
    return this._http.post('http://127.0.0.1:3000/users/alist',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  // show(){
  //   return this._http.get('http://127.0.0.1:3000/users/details',{
  //     observe:'body',
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   });
  // }

}
