import { Injectable } from '@angular/core';
import {Http, Response,  Headers, RequestOptions, RequestMethod} from '@angular/http';

import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Options } from 'selenium-webdriver/firefox';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ItemService {
    constructor( public http: HttpClient){

    }

    getItem(){
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json','No-Auth':'True',
                'Accept':'application/json','Access-Control-Allow-Origin':'https://localhost:44300/',
                'Access-Control-Allow-Credentials':'true'
          })
        }
        return this.http.get('https://localhost:44300/api/Items',httpOptions);
    }

}
