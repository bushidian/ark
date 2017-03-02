import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }   from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerEditReactiveComponent } from './customer-edit-reactive.component';
import { CanDeactivateGuard } from './can-deactivate.guard';


const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent
  },
  {
    path: ':id',
    component: CustomerEditComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers:    [ CanDeactivateGuard ]
})
export class CustomersRoutingModule { 
  static components = [ CustomersComponent, CustomersGridComponent , CustomerEditComponent, CustomerEditReactiveComponent ];
}