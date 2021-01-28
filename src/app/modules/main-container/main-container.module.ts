import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerRoutingModule } from './main-container-routing.module';
import { MainComponent } from './main/main.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainContainerRoutingModule,
    LayoutModule,
    SharedModule,
  ],
})
export class MainContainerModule {}
