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
  items: Item[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getItem().pipe(map((data:Response)=>{
      return data.json() as Item[];
    })).toPromise().then(
      x =>{
        this.items = x;
        this.items.reverse();
        this.loading = false;
      }
    )
  }
}
