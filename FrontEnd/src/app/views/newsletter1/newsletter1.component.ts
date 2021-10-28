import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { UniversityService } from '../serrvice/University.service';
import { University } from '../moldels/University.class';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';
import {SelectItem} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  templateUrl: 'newsletter1.component.html',

})
export class NewsLetter1Component implements OnInit {



  loading = false;
  
  universities: University[] = [];

  sortOptions: SelectItem[] = [];

  msgs: Message[] = [];
  
  sortKey: string = '';

  sortField: string = '';

  sortOrder: number = 0;


  constructor(private service: UniversityService ) { }
  images: any[];
  ngOnInit() {

  }
  

  public ngAfterViewInit(): void {

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

}

