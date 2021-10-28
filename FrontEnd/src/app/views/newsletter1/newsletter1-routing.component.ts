import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsLetter1Component } from './newsletter1.component';

const routes: Routes = [
  {
    path: '',
    component: NewsLetter1Component,
    data: {
      title: 'Newsletter1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsLetter1RoutingModule {}
