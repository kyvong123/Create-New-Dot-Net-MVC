import { Injectable } from '@angular/core';
import {Http, Response,  Headers, RequestOptions, RequestMethod} from '@angular/http';
import {University} from '../moldels/University.class';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import { Options } from 'selenium-webdriver/firefox';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  API_URL: string = 'http://universities.hipolabs.com/search';
  constructor( public http: Http) { }
  getUniversity() {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.http.get(this.API_URL);
  }

}
