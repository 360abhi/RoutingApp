import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactService } from './Services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ProjectideasComponent } from './projectideas/projectideas.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { MyServices } from './Services/myservices.service';
import { WebdevComponent } from './myservices/webdev/webdev.component';
import { AppdevComponent } from './myservices/appdev/appdev.component';
import { ConsultancyComponent } from './myservices/consultancy/consultancy.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path : 'navbar', component: NavBarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path : 'projectideas', component : ProjectideasComponent},
  { path: 'services' ,children:[
    {path : '',component : MyservicesComponent},
    {path: 'webdev',component : WebdevComponent},
    {path: 'appdev',component : AppdevComponent},
    {path: 'consultancy',component : ConsultancyComponent},
  ]},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavBarComponent,
    AboutComponent,
    PagenotfoundComponent,
    HomeComponent,
    ProjectideasComponent,
    MyservicesComponent,
    WebdevComponent,
    AppdevComponent,
    ConsultancyComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes,{
    scrollPositionRestoration: 'enabled'
  }), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
