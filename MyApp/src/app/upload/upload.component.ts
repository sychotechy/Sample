import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title = 'helloworld';
   
  fileData ?:any= null;
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
     
   
  }
 
  fileProgress(event: any) {
    console.log(event);
    
    this.fileData = <File>event.target.files[0];
  }
 
  onSubmit() {
    const formData = new FormData();
    
    formData.append('file', this.fileData);
    console.log(this.fileData);
    
    this.http.post('http://localhost:8083/uploadfile', formData,{headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*"
    })})
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
  }
 
}
