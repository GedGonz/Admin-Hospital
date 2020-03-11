import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


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
        },

        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: LoginComponent
        },

        {
          path: '**',
          component: NopagefoundComponent
        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
