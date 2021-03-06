import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { GrowlerModule } from './growler/growler.module';
import { ModalModule } from './modal/modal.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './services/data.service';
import { DataFilterService } from './services/data-filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';
import { ValidationService } from './services/validation.service'
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, HttpModule, RouterModule, GrowlerModule, ModalModule],
  exports: [NavbarComponent, RouterModule, GrowlerModule, ModalModule],
  declarations: [NavbarComponent],
  providers: [
    //Default XSRF provider setup (change cookie or header name if needed): 
    //{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') },
    DataService, DataFilterService, SorterService, TrackByService,
    ValidationService, AuthService
  ] // these should be singleton

})

export class CoreModule extends EnsureModuleLoadedOnceGuard {

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}