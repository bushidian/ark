import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeaderComponent } from './header.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [ 
    AppComponent,
    routedComponents,
    HeaderComponent,
    AboutComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
