import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { UniversityService } from '../serrvice/University.service';
import { University } from '../moldels/University.class';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';
import {SelectItem} from 'primeng/api';
import {Message} from 'primeng/api';
import { FavoriteService } from '../serrvice/Favorite.service';
import { Favorite } from '../moldels/Favorite.class';
import { AuthService } from '../serrvice/Auth.service';
// import * as crypto from 'crypto';



export interface FavoritePost{
  user: string;
  favorite_list:string;
}

@Component({
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {



  loading = false;
  
  private favorites: Favorite[] = [];

  universities: University[] = [];

  sortOptions: SelectItem[] = [];

  msgs: Message[] = [];
  
  sortKey: string = '';

  sortField: string = '';

  sortOrder: number = 0;

  selectedFavorite:FavoritePost ={
    user:'',
    favorite_list:''
  }

  constructor(private service: UniversityService, private favoriteService: FavoriteService, private authService:AuthService ) { }
  images: any[];
  ngOnInit() {
    this.loadData();
    // this.loadFavorite();
    this.sortOptions = [
      {label: 'Name', value: 'name'},
      {label: 'Country', value: 'country'},
  ];
  }
  

  public ngAfterViewInit(): void {

  }

  
  //thay đổi dữ liệu khi chuyển trang

  //load dữ liệu 
  loadData(): any {
    this.loading=true;
    this.service.getUniversity().pipe(map((data:Response)=>{
        return data.json() as University[];
    })).toPromise().then(
      x=>{
        this.universities = x;
        this.universities.reverse();
        this.loading = false;
      }
    );
  }
  
  loadFavorite():any{
    this.favoriteService.getFavorite().pipe(map((data:Response)=>{
      return data.json() as Favorite[];
    })).toPromise().then(
      x=>{
        this.favorites = x;
        this.favorites.reverse();
        this.loading = false;
      }
    );
  }


onSortChange(event) {
  let value = event.value;

  if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
  }
  else {
      this.sortOrder = 1;
      this.sortField = value;
  }
}

AddFavorite(envent,selectedUni:University){
  let a = event;
  let b = 5;
  this.favoriteService.getFavorite().pipe(map((data:Response)=>{
    return data.json() as Favorite[];
  })).toPromise().then(
    x=>{
      this.favorites = x;
      this.favorites.reverse();
      this.loading = false;
      let ExistedInList = false;
      for (let favorite of this.favorites)
      {
        if ((favorite.user == this.authService.authname) && (favorite.favorite_list == selectedUni.name))
        {
          ExistedInList = true;
        }
      }
      if (!ExistedInList)
      {
        this.selectedFavorite = {
          user:this.authService.authname,
          favorite_list:selectedUni.name
        }
        this.favoriteService.postFavorite(this.selectedFavorite).subscribe(
          x=>{
            console.log("thanh cong")
            // let password = "lkv03091967"
            // const salt = crypto.randomBytes(128);
            // console.log(salt);
            // const hash = crypto.pbkdf2Sync(password, salt, 1, 32, 'sha1');
        
            // console.log(hash.toString('hex'));
          }
        )
      }
      
    }
  );
  
  // this.favoriteServ
  
  } 


  RemoveFavorite(event,selectedUni:University){
      this.favoriteService.getFavorite().pipe(map((data:Response)=>{
        return data.json() as Favorite[];
    })).toPromise().then(
        x=>{
            console.log("vao day");
            this.favorites = x;
            this.favorites.reverse();
            for (let favorite of this.favorites)
            {
              if ((favorite.user == this.authService.authname) && (favorite.favorite_list == selectedUni.name))
              {
                this.favoriteService.deleteFavorite(favorite.id).subscribe(
                  x =>{
                    console.log("xoa thanh cong",x)
                  }
                )
              }
            }
        } 
        
      )}
        

      CheckExisted(event, selectedUni:University):boolean{
          for (let favorite of this.favorites){
            if ((favorite.user == this.authService.authname ) && ( favorite.favorite_list == selectedUni.name))
            {
              return true;
            }
          }
          return false;

      }
    
  }


