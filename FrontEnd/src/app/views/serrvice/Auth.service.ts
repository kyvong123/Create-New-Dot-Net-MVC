import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, Http, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { User } from "../moldels/User.class";
import { Admin } from "../moldels/Admin.class";


export interface Pictures{
    Image:File;
    ImagteCaption:string;
}

@Injectable({
    providedIn: 'root'
  })
  


export class AuthService{
    private loggedInStatus = false

    authtoken: string = '';

    authname: string = '';

    authrole: any;
    api_url: string = 'http://localhost:8000/';

    constructor(private http:HttpClient){}

    setLoggedIn(value:boolean){
        this.loggedInStatus = value
    }

    get getToken(){
        return this.authtoken
    }

    get isLoggedIn(){
        return this.loggedInStatus
    }

    getUser(username:string,password:string) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-urlencoded','No-Auth':'True'
            })
        }
        var data = "username=" + username + "&password=" + password + "&grant_type=password";
        return this.http.post<any>('http://localhost:35257/token',
        data,httpOptions).pipe(
            map(user=>{
                    // if (user && user.token) {
                        this.loggedInStatus = true;
                        this.authtoken = user.token;
                        localStorage.setItem('userRoles',user.role);
                        this.authname = user.username;
                        this.authrole = user.role
                        localStorage.setItem("currentUser", JSON.stringify(user))
                    // }              
                    return user;
            }));
            
    }

    postAdmin(admin:Admin)
    {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<any>('http://localhost:35257/api/User/Register',admin,httpOptions)
        .pipe(map(
            res =>{}
        ))
    }

    getAllRoles() {
        var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.get('http://localhost:35257/api/GetAllRoles', { headers: reqHeader });
    }

    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
        allowedRoles.forEach(element => {
          if (userRoles.indexOf(element) > -1) {
            isMatch = true;
            return false;
          }
        });
        return isMatch;
    }

    token:string = '';
    formData: FormData = new FormData();
    picture: Pictures={
        Image:null,
        ImagteCaption:''
    }
    sendFile(caption: string, fileToUpload: File) {
        const endpoint = 'http://localhost:35257/api/UploadImage';
        this.formData.append('Image', fileToUpload,fileToUpload.name);
        this.formData.append('ImageCaption', caption);
        this.picture={
            Image:fileToUpload,
            ImagteCaption:caption
        }
        this.token = JSON.parse(localStorage.getItem('currentUser')).access_token;
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'multipart/form-data','No-Auth':'True',
                'Accept': 'multipart/form-data','Authorization': 'Bearer '+ this.token
            })
        }
        return this.http
          .post<any>(endpoint, this.formData,httpOptions).subscribe(
              ()=>{
                  console.log('thanh cong')
              }
          );
    }
}