import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { ContactComponent } from './contact/contact.component';
import { E404Component } from './e404/e404.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'aboutUS', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogDetails', component: BlogDetailsComponent },
  { path: 'bmi', component: BmiCalculatorComponent },
  { path: 'classDetails', component: ClassDetailsComponent },
  { path: 'classTimeable', component: ClassTimetableComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: E404Component },
  { path: 'footer', component: FooterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },

  { path: 'acceuil', component: AccueilComponent },
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: '**', component: E404Component }  // Page 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
