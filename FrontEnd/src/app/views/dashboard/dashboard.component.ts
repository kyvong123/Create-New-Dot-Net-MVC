import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ItemService } from '../shared/Item.service';
import {map} from 'rxjs/operators';
import { Item } from '../models/Item.class';
import {Response} from '@angular/http';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private service: ItemService){}
  loading: boolean = false;
  items: Object;
  thunghiem:string = '';
  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().subscribe(x =>{
      let a = x;
      let b = x;
      let so = x[0].itemName;
      this.items = x;
      let c = x;
    });
    
  }
}
