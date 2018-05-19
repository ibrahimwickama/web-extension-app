import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PopupComponent } from './popup/popup.component';
import {RoutingModule} from "./app.routing";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventPageComponent,
    PopupComponent,LoginComponent
  ],
  imports: [
    BrowserModule,RoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
