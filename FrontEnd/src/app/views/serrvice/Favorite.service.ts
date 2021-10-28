import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, Http, RequestOptions,Response } from "@angular/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { User } from "../moldels/User.class";
import { AuthService } from "./Auth.service";
import { Favorite } from "../moldels/Favorite.class";
// import { AuthService } from "./Auth.service";



@Injectable({
    providedIn: 'root'
  })
  


export class FavoriteService{


    authtoken:string = '';

    constructor(private httpClient:HttpClient, private authService: AuthService,private http:Http){}



    getFavorite(){
        let httpOptions = {
            headers: new Headers({
                'Authorization' : ('token ' + this.authService.authtoken) 
            })
        }
        return this.http.get('http://localhost:8000/api/favorite',httpOptions);
    }

    postFavorite(favorite){

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization' : ('token ' + this.authService.authtoken) 
            })
        }
        return this.httpClient.post<any>('http://localhost:8000/api/favorite',favorite, httpOptions)
        .pipe(map(
            res =>{}
        ))
    }
    

    deleteFavorite(id:number){
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization' : ('token ' + this.authService.authtoken) 
            })
        }
        return this.httpClient.delete('http://localhost:8000/api/favorite/' + id,httpOptions)
        .pipe(map(
            res =>{
                console.log("Xoa thanh cong")
            }
        ))
    }
}