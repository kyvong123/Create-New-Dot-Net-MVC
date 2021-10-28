import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ItemService } from '../shared/Item.service';
import {map} from 'rxjs/operators';
import { Item } from '../models/Item.class';
import {Response} from '@angular/http';


import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[ToastrService]
})
export class DashboardComponent implements OnInit {
 
  constructor(private service: ItemService, private toastr:ToastrService){}
  loading: boolean = false;
  items: Object;
  thunghiem:string = '';


  data = [];
  settings = {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().subscribe(x =>{
      
      this.data = [x]
      this.data = this.data[0]
      this.settings = {
        add:{
          create:true
        },
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
        },
        
      };
    });
  }

  printMessage(event){
    this.toastr.success('Tao item thanh cong !','Item da duoc khoi tao');
    console.log('tao thanh cong')
    return true
  }






  
}
