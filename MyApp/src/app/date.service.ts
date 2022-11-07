import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }


  getDate() {
    // return new Date()
    let date=new Date() 
  // console.log(date);
  return date
  
  }
}
