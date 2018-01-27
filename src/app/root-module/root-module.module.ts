import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ----------- template constructing module ------------//
import { LeftPanelModule } from '../left-panel/left-panel.module';
import { RightPanelModule } from '../right-panel/right-panel.module';
// ----------- loding main routing module ------------//
import { AppRoutingModule } from '../app-routing/app-routing.module';
// ----------- loading router modules ------------//
import { routerModules } from '../app-routing/app-routing.module';

// ----------- component declaration ------------//
import { RootComponentComponent } from './root-component/root-component.component';

@NgModule({
  imports: [
    CommonModule,
    /* template constructing module */
    LeftPanelModule,
    RightPanelModule,
    /* loading main routing module */
    AppRoutingModule,
    /* loading routermodules */
    routerModules
  ],
  declarations: [
    RootComponentComponent
  ],
  exports: [RootComponentComponent]
})
export class RootModuleModule { }
