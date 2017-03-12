import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat.component';
import { AuthCanActivateGuard } from '../core/guard/auth.can.active.guard';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthCanActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthCanActivateGuard]
})
export class ChatRoutingModule {
  static components = [ChatComponent];
}