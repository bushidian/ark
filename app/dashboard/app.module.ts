import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AboutComponent } from './dashboard/about.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CoreModule, //Singleton objects
    SharedModule //Shared (multi-instance) objects
  ],
  declarations: [ 
    AppComponent,
    routedComponents,
    AboutComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
