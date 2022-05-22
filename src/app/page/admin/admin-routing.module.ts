import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "home",
        loadChildren: () => import('./layout/menu/menu.module').then(m=>m.MenuModule),
      },
    ])
  ]
})
export class AdminRoutingModule { }
