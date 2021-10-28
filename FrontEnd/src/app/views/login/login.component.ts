import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { User } from '../moldels/User.class';
// import {MessageService} from 'primeng/components/common/messageservice';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [MessageService]

})
export class LoginComponent implements OnInit { 
  public user = {
    UserName:'',
    Password:''
  };

  wronginput:string ='\xa0\xa0\xa0' +  'Wrong username or password !' + '\xa0\xa0';

  isLoginError : boolean = false;

  myform: FormGroup;
  constructor(private authService:AuthService, private router:Router, private messageService: MessageService){}
  ngOnInit(): void{
    this.myform = new FormGroup({
      UserName: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required])
    })
  }

  get f(){
      return this.myform.controls;
  }

  loginUser(event)
  {
    // event.preventDefault();
    // const username = event.target.querySelector('#username').value;
    // const password = event.target.querySelector('#password').value;
    // console.log(username,password);
    // this.user ={
    //   username:username,
    //   password:password
    // }
    console.log(this.f.UserName.value,this.f.Password.value);
    this.authService.getUser(this.f.UserName.value,this.f.Password.value).pipe(first()).subscribe(
      data =>{

        this.router.navigate(['/dashboard'])
        
        console.log("thanh cong")
        this.messageService.add({severity:'success',summary:'Đăng nhập thành công!', detail: 'bạn đã đăng nhập vào hệ thống'});
      },
      (err: HttpErrorResponse)=>
      {
        this.isLoginError = true;
      }
       
      
    
    );
    }
}
