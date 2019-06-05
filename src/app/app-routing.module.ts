import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppLoginComponent } from './app-login/app-login.component';

import { DashboardComponent } from './app-pages/dashboard/dashboard.component';
import { PackagesComponent } from './app-pages/packages/packages.component';
import { DetailsComponent } from './app-pages/details/details.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', redirectTo: '/details/1', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'packages', component: PackagesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
