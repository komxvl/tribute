import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TributeComponent } from './components/tribute/tribute.component';
import {NgxTributeModule} from "ngx-tribute";

@NgModule({
  declarations: [
    AppComponent,
    TributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTributeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
