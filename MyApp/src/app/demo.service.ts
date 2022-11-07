import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

constructor() { }


getDate()
{
  let date = new Date();
  return date
  
}
}
