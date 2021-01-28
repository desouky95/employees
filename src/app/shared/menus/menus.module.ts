import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports : [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MenusModule { }
