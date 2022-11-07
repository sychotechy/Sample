import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-Parent',
  templateUrl: './Parent.component.html',
  styleUrls: ['./Parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges {

  constructor() {
    console.log("Parent class constructor");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("ng on changes inside Parent");
    
  }

  data:number=0
  ngOnInit() {
    console.log("on in it of ","Parent");  
  }
  setNumber(event:any){
  this.data=<number><any>event.target.value

  }
  condition=true

  change(){
    this.condition=this.condition?false:true;
  }


}
