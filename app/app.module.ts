import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './rxjs-extensions';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    CoreModule, //Singleton objects
    SharedModule //Shared (multi-instance) objects
  ],
  declarations: [ 
    AppComponent,
    routedComponents
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
