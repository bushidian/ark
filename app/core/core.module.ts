import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
import { DataFilterService } from './data-filter.service';
import { Sorter } from './sorter';
import { TrackByService } from './trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';

@NgModule({
  imports: [ HttpModule, RouterModule ],
  exports: [ NavbarComponent, RouterModule ],
  declarations: [ NavbarComponent ],
  providers: [
    //Default XSRF provider setup (change cookie or header name if needed): 
    //{ provide: XSRFStrategy, useValue: new CookieXSRFStrategy('XSRF-TOKEN', 'X-XSRF-TOKEN') },
    DataService, DataFilterService, Sorter, TrackByService
  ] // these should be singleton

})

export class CoreModule extends EnsureModuleLoadedOnceGuard {

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}