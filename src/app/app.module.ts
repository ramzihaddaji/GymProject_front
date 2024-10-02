;
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { E404Component } from './e404/e404.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
 TeamComponent, ServicesComponent, MainComponent, GalleryComponent, ContactComponent, ClassTimetableComponent, ClassDetailsComponent, BmiCalculatorComponent, BlogDetailsComponent, BlogComponent, AboutUsComponent, E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
