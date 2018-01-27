import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ----------- custom module ------------//
import { LeftPanelModule } from '../left-panel/left-panel.module';
import { RightPanelModule } from '../right-panel/right-panel.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { routerModules } from '../app-routing/app-routing.module';
// ----------- component declaration ------------//
import { RootComponentComponent } from './root-component/root-component.component';

@NgModule({
  imports: [
    CommonModule,
    LeftPanelModule,
    RightPanelModule,
    AppRoutingModule,
    routerModules
  ],
  declarations: [
    RootComponentComponent
  ],
  exports: [RootComponentComponent]
})
export class RootModuleModule { }
