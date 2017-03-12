import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerEditReactiveComponent } from './customer-edit-reactive.component';
import { AuthCanActivateGuard } from '../core/guard/auth.can.active.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: ':id',
    component: CustomerEditComponent,
    canActivate: [AuthCanActivateGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthCanActivateGuard, CanDeactivateGuard]
})
export class CustomersRoutingModule {
  static components = [CustomersComponent, CustomersGridComponent, CustomersCardComponent, CustomerEditComponent,
    CustomerEditReactiveComponent];
}