import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { NewsLetter1Component } from './newsletter1.component';
import { NewsLetter1RoutingModule } from './newsletter1-routing.component';
import {RatingModule} from 'primeng/rating';
import {Dropdown, DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext'
import {ContextMenuModule} from 'primeng/contextmenu';
import {KeyFilterModule} from 'primeng/keyfilter';
// import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    NewsLetter1RoutingModule,
    ChartsModule,
    ButtonModule,
    KeyFilterModule,
    TableModule,
    ContextMenuModule,
    PanelModule,
    ProgressBarModule,
    InputTextModule,
    DataViewModule,
    RatingModule,
    DropdownModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ NewsLetter1Component ]
})
export class NewsLetter1Module { }
