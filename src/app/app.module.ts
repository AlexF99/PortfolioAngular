import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MonthlyPresentationComponent } from './monthly-presentation/monthly-presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjetosComponent,
    HomeComponent,
    BannerComponent,
    MonthlyPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
