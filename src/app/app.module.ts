import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './component/blog/blog.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { SharedComponent } from './component/shared/shared.component';

const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'blog', component: BlogComponent },
  {path: 'contact', component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProductsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
