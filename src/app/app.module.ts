import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.modules';
import { AmpDashModule } from 'amp-dash';
import {RouterModule} from '@angular/router';
import { landingPageComponent } from './components/landing page/landing-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AmpDashModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'landingpage',
        component: landingPageComponent
      },
      {
        path: '',
        redirectTo: '/landingpage',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
