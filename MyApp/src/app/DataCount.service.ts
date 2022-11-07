import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCountService {


  private countData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  countData$ = this.countData.asObservable();

  constructor() { }

  public setCountData(data: any) {
    return this.countData.next(data)

  }
  // public getCountData() {
  //   return this.countData$

  // }
}
