
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Demo',
  templateUrl: './Demo.component.html',
  styleUrls: ['./Demo.component.css']
})
export class DemoComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  url:any=""
  urls:any=""
  file:any;
  constructor(private http: HttpClient) { }
condition=false;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      picture: new FormControl('', [Validators.required])

    });


  }

  makeRequest(url: string, form: any, settings: any = { toast: true, hideLoader: false }) {

    let formData = this.form;
    const uploadData = new FormData(); // Create Form Data object to upload the file in POST FORM

    for (let i in form) {
      if (form[i] instanceof Blob){  //  Check if key value is file
        uploadData.append(i, form[i], form[i].name ? form[i].name : "");
      //  console.log("from form",form[i],form[i].name);
        
      }
      else
        uploadData.append(i, form[i]);
       // console.log("from form",form[i],form[i].name);
    }
    console.log("Data to be uploaded",uploadData);
    // //console.log();
    ////////////////////////////////////////////////////////////////////////////////////
    // const uploadData = new FormData();
    // uploadData.set("name",this.form.value.name)
    // uploadData.set("file", this.form.controls.get("picture"))
    console.log(this.file);
    
    return this.http.post(url,JSON.stringify( {name:"djkj",file:this.file} ),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    })
      // .pipe(map((data: any) => {
      //   //handle api 200 response code here or you wanted to manipulate to response
      //   console.log("req",data);
        
      //   return data;
      // })
      //   ,
      //   catchError((error) => {    // handle error
        
      //     if (error.status == 404) {
      //       //Handle Response code here
      //     }
      //     return throwError(error);
      //   })
      // );

  }
// change(){
//   this.condition=true
//   this.http.get("http://localhost:3000/posts/22").subscribe(x=>{this.url=x
  
//   this.urls=this.url.image[0]}
//   )
// }
 

  submit() {

    this.makeRequest("http://localhost:3000/posts", this.form.value).subscribe(data => {

      console.log(data);
      
    })
  }

  getFile(e:any) {
alert("uploading")
    let extensionAllowed :any= {"png":true,"jpeg":true};
    console.log(e.target.files);
    if (e.target.files[0].size / 1024 / 1024 > 20) {
      alert("File size should be less than 20MB")
      return;
    }
    if (extensionAllowed) {
      var nam = e.target.files[0].name.split('.').pop();
      if (!extensionAllowed[nam]) {
        alert("Please upload " + Object.keys(extensionAllowed) + " file.")
        return;
      }
    }
    this.file=e.target.files[0]
    console.log("called",this.file);
    
    this.form.controls["picture"].setValue(e.target.files[0]);

  }
}
