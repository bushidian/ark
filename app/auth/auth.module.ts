import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  imports:      [ AuthRoutingModule ],
  declarations: [ AuthRoutingModule.components ]
})
export class AuthModule { }