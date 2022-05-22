import { HomeComponent } from './../../home.component';
import { Route } from '@angular/router';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: 'health.title',
  },
};
