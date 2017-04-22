import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.modules';
import { AmpDashModule } from 'amp-dash';
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
    AmpDashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
