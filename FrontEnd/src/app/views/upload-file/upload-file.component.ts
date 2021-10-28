import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../serrvice/Auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  providers: [MessageService, AuthService]
})
export class UploadFileComponent implements OnInit {
  
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-urlencoded','No-Auth':'True',
        'Authorization': 'Bearer '+ this.authService.authtoken
    })
  }

  token:string = '';

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private authService: AuthService) { }
  hd:HttpHeaders;
  ngOnInit(): void {
    let a = this.authService.getToken;
    let b = localStorage.currentUser.access_token;
    this.token = JSON.parse(localStorage.getItem('currentUser')).access_token;
    localStorage.setItem('access_token',this.token);
    this.hd= new HttpHeaders({
      'Content-Type': 'application/json','No-Auth':'True',
      'Authorization': 'Bearer '+ this.token
    })
  }

  onUpload(event) {
    console.log("xuat file")
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
   
  }

  fileName:string = "";
  fileTemp:File = null;


  onSend(event) {
    this.fileName = event.files[0].name;
    this.fileTemp = event.files[0];
    // files = event.originalEvent.files;
    // event.formData.append('Image',this.fileTemp,this.fileName);
    // event.formData.append('ImageCaption',this.fileName);
    this.authService.sendFile(this.fileName,this.fileTemp);
    let a = 5;
    // Deal with your files
    // e.g  assign it to a variable, and on submit add the variable to your form data
  }

//   onBeforeUploadFoto(event: any) {
//     for (let file of event.files){
//       event.formData.append('ImageCaption', file.name);
//     }
    
// }

}
