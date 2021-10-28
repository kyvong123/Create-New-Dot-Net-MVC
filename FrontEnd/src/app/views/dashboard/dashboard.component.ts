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
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: "and",
      filters: [{ field: "itemName", operator: "contains", value: "" }],
    },
  };
  constructor(private service: ItemService){}
  loading: boolean = false;
  items: Object;
  thunghiem:string = '';

  public gridData: GridDataResult; 
  
  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().subscribe(x =>{
      let a = x;
      let b = x;
      let so = x[0].itemName;
      this.items = x;
      let c = x;
      this.gridData = process([this.items], this.state);
      let d = [this.items];
    });
    
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process([this.items], this.state);
  }
}
