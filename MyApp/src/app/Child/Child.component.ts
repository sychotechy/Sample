import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,SimpleChanges,OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-Child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy {

  constructor(private http:HttpClient) { 

    console.log("Child class constructor");
    
  }
  ngOnDestroy(): void {
  console.log("Child component destroyed......");
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("ng on changes inside child");
    
  }

  ngOnInit() {
    console.log("on in it of ","Child");   
    console.log(this.http.get("https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10").subscribe(x=>console.log(x)
    ));
    


// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/future.json',
//   params: {q: 'London', dt: '2022-12-25'},
//   headers: {
//     'X-RapidAPI-Key': 'f75ad7d045msh9423b349b2eb09ep1535c8jsn42632ba0f44c',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//   }
// };
// this.http.get("https://weatherapi-com.p.rapidapi.com/future.json",{ params: {q: 'London', dt: '2022-12-25'},
// headers: {
//   'X-RapidAPI-Key': 'f75ad7d045msh9423b349b2eb09ep1535c8jsn42632ba0f44c',
//   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// }}).subscribe(data=>console.log(data)
// )


  }

  @Input()
  choice?:number
  
}
