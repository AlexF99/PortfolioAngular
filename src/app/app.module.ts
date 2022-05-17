import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projetos/projects.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MonthlyPresentationComponent } from './monthly-presentation/monthly-presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WrapModule } from './wrap/wrap.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
    BannerComponent,
    MonthlyPresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WrapModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
