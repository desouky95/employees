import { NgModule } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';
import { MenusModule } from './menus/menus.module';
import { FormsModule } from './forms/forms.module';
import { TableModule } from './table/table.module';
import { PageTemplateComponent } from './ui/page-template/page-template.component';
import { UiModule } from './ui/ui/ui.module';



@NgModule({
  imports: [
    UiModule,
    ButtonsModule,
    MenusModule,
    FormsModule,
    TableModule,
  ],
  exports: [
    UiModule,
    ButtonsModule,
    MenusModule,
    FormsModule,
    TableModule,
  ]
})
export class SharedModule { }
