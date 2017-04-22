import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {landingPageComponent} from './landing page/landing-page.component'

@NgModule({
  declarations: [
    landingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  exports:[landingPageComponent],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
