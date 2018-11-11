import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SessionStorageService } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { routes } from './routes';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthentificationService } from './common/services/authentification.service';
import {MatInputModule} from '@angular/material/input';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { BookmarksComponent } from './auth/bookmarks/bookmarks.component';
import { BookmarksService } from './auth/bookmarks/services/bookmarks.service';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    BookmarksComponent
  ],
  imports: [
    //Core
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    //Material Design
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
    //Custom

  ],
  providers: [PublicGuard,
     AuthGuard, 
     AuthentificationService,
      SessionStorageService,
      BookmarksService,
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
