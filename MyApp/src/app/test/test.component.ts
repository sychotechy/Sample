import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  text:string=''
  result:any

  constructor(private serv:DemoService) { }

  ngOnInit() {
    this.result= this.serv.getDate()
    console.log(this.result);
    
  }

}
