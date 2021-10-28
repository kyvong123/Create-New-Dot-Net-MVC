import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { CardListComponent } from './card-list.component';
import { CardListRoutingModule } from './card-list-routing.module';
import {RatingModule} from 'primeng/rating';
import {Dropdown, DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext'
import {ContextMenuModule} from 'primeng/contextmenu';
import {KeyFilterModule} from 'primeng/keyfilter';
import { CommonModule } from '@angular/common';
// import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CardListRoutingModule,
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
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CardListComponent ]
})
export class CardListModule { }
