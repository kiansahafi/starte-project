import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { ProductPageComponent } from './login/components/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'Login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: 'Cart', component: ProductPageComponent},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
