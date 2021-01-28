import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './layout/pages/signin/signin.component';
import { MainContainerModule } from './modules/main-container/main-container.module';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => MainContainerModule,
  },
  {
    path : 'signin',
    component : SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
