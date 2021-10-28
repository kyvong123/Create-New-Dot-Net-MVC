import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './upload-file.component';

// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UploadFileComponent,
    data: {
      title: 'Upload Files'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule {}
