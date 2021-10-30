import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkshortenerComponent } from './views/linkshortener/linkshortener.component';
import { LoginComponent } from './views/login/login.component';
import { RedirectComponent } from './views/redirect/redirect.component';
import { RankingComponent } from './views/ranking/ranking.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'urlshortener',
    component:LinkshortenerComponent
  },
  {
    path:'ranking',
    component:RankingComponent
  },
  {
    path:':shortcode',
    component:RedirectComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
