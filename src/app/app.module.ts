import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactService } from './Services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { Route,RouterModule,Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
  {path : '', component:HomeComponent},
  // { path : 'navbar', component: NavBarComponent},
  { path: 'home' , component : HomeComponent},
  { path:'about', component : AboutComponent },
  { path: 'contact', component : ContactComponent },
  { path:'**', component : PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavBarComponent,
    AboutComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
