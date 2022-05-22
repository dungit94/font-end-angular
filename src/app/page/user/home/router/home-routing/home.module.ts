import { HomeComponent } from './../../home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoute } from './home.route';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([homeRoute])
  ]
})
export class HomeModule { }
