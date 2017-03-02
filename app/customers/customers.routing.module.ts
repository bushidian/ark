import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }   from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerEditReactiveComponent } from './customer-edit-reactive.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent
  },
  {
    path: ':id',
    component: CustomerEditComponent,
//    canActivate: [ CanActivateGuard ],
    canDeactivate : [ CanDeactivateGuard ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers:    [ CanActivateGuard, CanDeactivateGuard ]
})
export class CustomersRoutingModule { 
  static components = [ CustomersComponent, CustomersGridComponent , CustomerEditComponent, CustomerEditReactiveComponent ];
}