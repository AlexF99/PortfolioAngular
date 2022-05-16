import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BrowserModule } from '@angular/platform-browser';
import { WrapRoutingModule } from './wrap-routing.module';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [WrapperComponent, ChildComponent],
  imports: [
    CommonModule,
    BrowserModule,
    WrapRoutingModule
  ]
})
export class WrapModule { }
