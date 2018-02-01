import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ----------- importing dependencies modules list ------------//
import { LoginModule } from '../login/login.module';
import { MainContentModule } from '../main-content/main-content.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
// ----------- importing dependency components list ------------//
import { LoginComponent } from '../login/login/login.component';
import { MainContentComponent } from '../main-content/main-content/main-content.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'garage',
    loadChildren: '../garage/garage.module#GarageModule',
  },
  {
    path: 'songs',
    loadChildren: '../songs/songs.module#SongsModule',
  },
  {
    path: '**',
    // redirectTo: '/login',
    // pathMatch: 'full'
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only

      }
    ),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerModules = [LoginModule, MainContentModule, PageNotFoundModule];


