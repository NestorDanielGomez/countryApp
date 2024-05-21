import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
