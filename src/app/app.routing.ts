import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
