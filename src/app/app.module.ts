import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PopupComponent } from './components/popup/popup.component';
import {RoutingModule} from "./app.routing";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { InstancesComponent } from './components/instances/instances.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventPageComponent,
    PopupComponent,LoginComponent,
    MessagesComponent, NotificationsComponent,
    InstancesComponent
  ],
  imports: [
    BrowserModule,RoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
