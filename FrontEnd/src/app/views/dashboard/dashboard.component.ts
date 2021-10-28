import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ItemService } from '../shared/Item.service';
import {map} from 'rxjs/operators';
import { Item } from '../models/Item.class';
import {Response} from '@angular/http';
import {MessageService} from 'primeng/api';


import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
 
  constructor(private messageService: MessageService,private service: ItemService){}
  loading: boolean = false;
  items: Object;
  thunghiem:string = '';


  datas = [];
  settings = {}

  clonedProducts: { [s: string]: Item; } = {};

  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().subscribe(x =>{
      
      this.datas = [x]
      this.datas = this.datas[0]
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


  onRowEditInit(event,item: Item) {
    // this.clonedProducts[item.ItemID] = {...item};
    this.messageService.add({severity:'success',summary:'Đăng nhập thành công!', detail: 'bạn đã đăng nhập vào hệ thống'});
    
    let a = event;
  }


  printMessage(event){
    // this.toastr.success('Tao item thanh cong !','Item da duoc khoi tao');
    console.log('tao thanh cong')
    return true
  }






  
}
