import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/button';
import { UploadFileComponent } from './upload-file.component';
import { UploadFileRoutingModule } from './upload-file-routing.module';
import {FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CommonModule } from '@angular/common';
// import {HttpClientModule} from '@angular/common/http';
// import { Button } from 'primeng/button';

@NgModule({
  imports: [
    FormsModule,
    UploadFileRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    CommonModule,
    ToastModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    MessageModule,
    MessagesModule,
    HttpModule
  ],
  declarations: [ UploadFileComponent ]
})
export class UploadFileModule { }
