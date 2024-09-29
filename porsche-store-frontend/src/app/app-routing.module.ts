import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AdminComponent } from './components/admin/admin.component';
import { SeteUmOitoComponent } from './components/catalogue/pages/sete-um-oito/sete-um-oito.component';
import { NoveUmUmComponent } from './components/catalogue/pages/nove-um-um/nove-um-um.component';
import { PanameraComponent } from './components/catalogue/pages/panamera/panamera.component';
import { TaycanComponent } from './components/catalogue/pages/taycan/taycan.component';
import { MacanComponent } from './components/catalogue/pages/macan/macan.component';
import { CayenneComponent } from './components/catalogue/pages/cayenne/cayenne.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'admin', component: AdminComponent },
  { path: '718', component: SeteUmOitoComponent},
  { path: '911', component: NoveUmUmComponent},
  { path: 'panamera', component: PanameraComponent},
  { path: 'taycan', component: TaycanComponent},
  { path: 'macan', component: MacanComponent},
  { path: 'cayenne', component: CayenneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
