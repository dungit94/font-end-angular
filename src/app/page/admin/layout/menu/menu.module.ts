import { menuRoute } from './menu.route';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([menuRoute])
  ]
})
export class MenuModule { }
