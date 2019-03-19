
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
