import { Component, OnDestroy, OnInit } from '@angular/core';
import { from ,Observable,of,catchError} from 'rxjs';
import {filter,map} from 'rxjs/operators'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  data:number[]=[]
  valueObservable:Observable<number>=new Observable();
  ngOnInit() {
    this.valueObservable= from([100,98,56,32,90,85,111])
    this.valueObservable.pipe(filter(x=>x%2==0),
    map(x=>{
      if(x==90)
      throw new Error("Error")
      return x
    }
    ),catchError(err=>of(1,3,5))
    )
    .subscribe(x=>console.log("data",x)

    )


  }
  
}
