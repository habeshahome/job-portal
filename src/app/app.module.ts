import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveDirective } from './directives/directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';



import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JobComponent } from './components/job/job.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './modules/admin/admin.module';

 
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    DirectiveDirective,
    JobsComponent,
    SearchComponent,
    BannerComponent,
    FooterComponent,
    NotFoundComponent,
    JobComponent,
    HomeComponent
  ],
  imports: [
    AuthModule, // adding auth module to the app 
    UserModule, // adding user module to the app
    AdminModule, // adding admin module to the app
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
