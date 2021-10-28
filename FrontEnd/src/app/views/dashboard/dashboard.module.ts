import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {InputTextModule} from 'primeng/inputtext';
import { ToastrModule } from 'ngx-toastr';
import {Button, ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
// import {TableModule} from 'primeng/table';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    ToastModule,
    // ToastrModule.forRoot({
    //   positionClass :'toast-bottom-right'
    // }),
    // BrowserAnimationsModule,
    HttpClientModule,
    // TableModule,
    BsDropdownModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
