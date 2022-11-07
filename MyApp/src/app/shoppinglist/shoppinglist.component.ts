import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

@Input()
mylist:string[]=[]
  constructor() { }
  ngOnInit() {
  }
  @Output()
 selectEvent :EventEmitter<string> =new EventEmitter()

  getProduct(obj:Event){
    let data=(obj.target as HTMLSelectElement).value;
    console.log("called",data);
    
    this.selectEvent.emit(data)
    }

  



}
