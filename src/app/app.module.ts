import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './component/blog/blog.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { SharedComponent } from './component/shared/shared.component';
import { AuthorFormComponent } from './component/blog/author-form/author-form.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'author', component: AuthorFormComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'author', component: AuthorFormComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    AuthorFormComponent,
    SharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
