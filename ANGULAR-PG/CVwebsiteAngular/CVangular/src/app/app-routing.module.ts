import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { IntroComponent } from './views/intro/intro.component';
import { AboutComponent } from './views/about/about.component';
import { CvComponent } from './views/cv/cv.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

const routes: Routes = [
  { path: '',
  component: IntroComponent,
  pathMatch: 'full',
},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'cv',
    component: CvComponent
  }
];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
],
  exports: [ RouterModule ]
})

export class AppRoutingModule {





}
