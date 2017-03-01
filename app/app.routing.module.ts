import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/about.component';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
       path: 'about',
       component: AboutComponent
  },
  {
       path: 'customers',
       component: CustomersComponent
  },
  {
       path: 'customers/:id',
       component: CustomerEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, AboutComponent, CustomersComponent, CustomerEditComponent, CustomerEditReactiveComponent, CustomersGridComponent];
