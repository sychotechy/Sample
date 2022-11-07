import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { of } from 'rxjs'
import { mergeMap ,filter,map} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';
  ambulance = faAmbulance
  count = 0
  srcObservable
  innerObservable
  constructor(private router: Router,private http:HttpClient) {
    this.srcObservable = of(1, 2)
    this.innerObservable = of('A', 'B', 'C')
  }

  ngOnInit() {

    // const options = {
    //   method: 'GET',
    //   headers: {'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
    // };
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(response => console.log("data",response))
      .catch(err => console.error(err));
      const options = {
        method: 'GET',
      
        params: {market: 'classic', iso_date: '2018-12-01', federation: 'UEFA'},
        headers: {
          'X-RapidAPI-Key': 'f75ad7d045msh9423b349b2eb09ep1535c8jsn42632ba0f44c',
          'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
        }
      };
      fetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictions",options).then(x=>x.json()).then(x=>console.log(x)
      )
  }
  go() {
    this.router.navigateByUrl("")
  }
}
