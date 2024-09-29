import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/home/home-components/card/card.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AdminComponent } from './components/admin/admin.component';
import { CardCatalogueComponent } from './components/catalogue/card-catalogue/card-catalogue.component';
import { PagesModule } from './components/catalogue/pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    GalleryComponent,
    FooterComponent,
    AboutComponent,
    CatalogueComponent,
    AdminComponent,
    CardCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
