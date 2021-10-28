import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr'
import { Admin } from '../moldels/Admin.class';
import { AuthService } from '../serrvice/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  admin: Admin ={
    UserName:'',
    Email:'',
    Password:'',
    FirstName:'',
    LastName:'',
    Roles:[],
  }

  myform: FormGroup;

  roles : any[];

  constructor(private authService:AuthService, private router :Router, private messageService: MessageService,private toast: ToastrService) { }
  ngOnInit():void{
    this.myform = new FormGroup({
      UserName: new FormControl(''),
      Email: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Password: new FormControl(''),
    })

    this.authService.getAllRoles().subscribe(
      (data : any)=>{
        data.forEach(obj => obj.selected = false);
        this.roles = data;
      }
    );
  }
  get f(){
    return this.myform.controls;
  }

  updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
  }
  
  registerUser($event)
  {
      var x = this.roles.filter(x => x.selected).map(y => y.Name);
      this.admin ={
        UserName:this.f.UserName.value,
        FirstName: this.f.FirstName.value,
        LastName: this.f.LastName.value,
        Email:this.f.Email.value,
        Password:this.f.Password.value,
        Roles:x,
      }
      this.authService.postAdmin(this.admin).subscribe(
        data=>{
          this.router.navigate(['/login']);
          console.log('dang ky thanh cong');
          this.toast.success('User registration successful');
          this.messageService.add({severity:'success',summary:'Đăng ký thành công!', detail: 'Bạn đã tạo một tài khoản mới'});
        }
      )
  }
}
