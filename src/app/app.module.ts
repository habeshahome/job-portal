import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveDirective } from './directives/directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { counterReducer } from './state/app.reducer';
import { loginReducer } from './state/auth/auth.reducer';

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
import { MyCounterComponent } from './components/my-counter/my-counter.component';



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
    HomeComponent,
    MyCounterComponent
  ],
  imports: [
    AuthModule, // adding auth module to the app 
    UserModule, // adding user module to the app
    AdminModule, // adding admin module to the app
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, authStatus: loginReducer }, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
