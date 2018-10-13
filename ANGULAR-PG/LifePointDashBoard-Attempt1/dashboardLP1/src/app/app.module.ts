import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DailyscriptsComponent } from './components/pages/dailyscripts/dailyscripts.component';
import { PendingscriptsComponent } from './components/pages/pendingscripts/pendingscripts.component';
import { FailedscriptsComponent } from './components/pages/failedscripts/failedscripts.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { GraphsComponent } from './components/pages/graphs/graphs.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DataComponent,
    HomeComponent,
    DailyscriptsComponent,
    PendingscriptsComponent,
    FailedscriptsComponent,
    HistoryComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
