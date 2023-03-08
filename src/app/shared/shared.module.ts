import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    MessageComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
