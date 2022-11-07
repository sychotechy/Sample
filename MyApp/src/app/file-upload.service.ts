import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseApiUrl = "http://localhost:3000/posts/"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:any):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
     console.log("uploaded data",file);
     
      return this.http.post(this.baseApiUrl, JSON.stringify({file:file,name:"test"}),{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
  }

  getImage(){
    return this.http.get(this.baseApiUrl+"k5yn6Ah")
  }

}
