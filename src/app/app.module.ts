import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppLoginComponent } from './app-login/app-login.component';

import { PagesModule } from './app-pages/pages.module';

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      AppLoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      PagesModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
