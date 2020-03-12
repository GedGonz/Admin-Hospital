import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
              {
                path: 'dashboard',
                component: DashboardComponent
              }, {
                path: 'progress',
                component: ProgressComponent
              },
              {
                path: 'graficas1',
                component: Graficas1Component
              },
              {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
              },
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
