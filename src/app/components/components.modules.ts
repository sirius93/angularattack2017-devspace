import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { landingPageComponent } from './landing page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { AmpDashModule } from 'amp-dash';

@NgModule({
  declarations: [
    landingPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AmpDashModule,
    
  ],

  exports: [landingPageComponent, HomepageComponent],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
