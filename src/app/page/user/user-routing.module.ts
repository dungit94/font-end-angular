import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'home',
        loadChildren: () => import('./home/router/home-routing/home.module')
        .then(m => m.HomeModule),
        data: {
          pageTitle: 'userManagement.home.title',
        },
      },
    ]),
  ]
})
export class UserRoutingModule { }
