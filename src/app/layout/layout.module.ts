import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LanguageService } from '../services/language/language.service';
import { SigninComponent } from './pages/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/apis/auth/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SigninComponent,
  ],
  imports: [
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthService],
  exports: [HeaderComponent, SidenavComponent, SigninComponent],
})
export class LayoutModule {}
