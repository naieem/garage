import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ----------- imported module list ------------//
import { LoginModule } from '../login/login.module';
import { MainContentModule } from '../main-content/main-content.module';
// ----------- imported component ------------//
import { LoginComponent } from '../login/login/login.component';
import { MainContentComponent } from '../main-content/main-content/main-content.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    ),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerModules = [LoginModule, MainContentModule];


