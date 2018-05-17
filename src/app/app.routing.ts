import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PopupComponent} from "./popup/popup.component";
import {HomepageComponent} from "./homepage/homepage.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'popup',
    component: PopupComponent
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
