import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConfigService {

// constructor() { }

// }
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};