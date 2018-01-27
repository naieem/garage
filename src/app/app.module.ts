import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ======================================
// Custom module declarations
// ======================================
import { RootModuleModule } from './root-module/root-module.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
