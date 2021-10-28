import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ItemService } from '../shared/Item.service';
import {map} from 'rxjs/operators';
import { Item } from '../models/Item.class';
import {Response} from '@angular/http';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { process, State } from "@progress/kendo-data-query";

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor(private service: ItemService){}
  loading: boolean = false;
  items: Object;
  thunghiem:string = '';

  public gridData: GridDataResult; 
  data = [];
  settings = {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().subscribe(x =>{
      
      var data2 = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
        
        // ... list of items
        
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
      this.data = [x]
      this.data = this.data[0]
      this.settings = {
        columns: {
          itemID: {
            title: 'Item ID'
          },
          itemName: {
            title: 'Item Name'
          },
          itemStatus:{
            title: 'Item Status'
          },
          description: {
            title: 'Description'
          },
          note: {
            title: 'Note'
          },
          
          
        }
      };
    });
    
    
  }




  
}
