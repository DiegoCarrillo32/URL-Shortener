import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Material
import { MaterialModule } from './modules/material/material.module';
// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './views/login/login.component';
import { LinkshortenerComponent } from './views/linkshortener/linkshortener.component';
import { RouterModule } from '@angular/router';
import { RedirectComponent } from './views/redirect/redirect.component';
import { RankingComponent } from './views/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinkshortenerComponent,
    RedirectComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
