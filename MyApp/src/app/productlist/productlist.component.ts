import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppinglistComponent } from '../shoppinglist/shoppinglist.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  @ViewChild(ShoppinglistComponent)
  list:ShoppinglistComponent=new ShoppinglistComponent();


  items:string[]=["Laptop","SmartPhone","Tablet","Books"]
  constructor() { }

  ngOnInit() {

  }

  item:string=""

  receiveData(data:string){

    this.item=data
    console.log(data);
    
  }





}
