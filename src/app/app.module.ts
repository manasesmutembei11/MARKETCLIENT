import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxErrorsModule } from '@ngspot/ngx-errors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './component/blog/blog.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { SharedComponent } from './component/shared/shared.component';
import { AuthorFormComponent } from './component/blog/author-form/author-form.component';
import { AuthorListComponent } from './component/blog/author-form/author-list/author-list.component';

const routes: Routes = [
  {path: '', component: SharedComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'author', component: AuthorFormComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'authorlist', component: AuthorListComponent}

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
    AuthorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgxErrorsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
