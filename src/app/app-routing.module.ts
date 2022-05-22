import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', 
    loadChildren: () => import('./page/user/user-routing.module')
                        .then(m => m.UserRoutingModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./page/admin/admin-routing.module')
                        .then(m => m.AdminRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
