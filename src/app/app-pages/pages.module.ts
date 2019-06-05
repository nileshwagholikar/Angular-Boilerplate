import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PackagesComponent } from './packages/packages.component';
import { DetailsComponent } from './details/details.component';

import { HeaderComponent } from '../app-common/header/header.component';
import { FooterComponent } from '../app-common/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [DashboardComponent, PackagesComponent, DetailsComponent, HeaderComponent, FooterComponent]
})
export class PagesModule { }
