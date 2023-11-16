import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { AboutUsListComponent } from './layouts/about-us-list/about-us-list.component';
import { TestimonialsListComponent } from './layouts/testimonials-list/testimonials-list.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    AboutUsListComponent,
    TestimonialsListComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
