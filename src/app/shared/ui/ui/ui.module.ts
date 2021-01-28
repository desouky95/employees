import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateComponent } from '../page-template/page-template.component';

@NgModule({
  declarations: [PageTemplateComponent],
  exports: [PageTemplateComponent],
})
export class UiModule {}
