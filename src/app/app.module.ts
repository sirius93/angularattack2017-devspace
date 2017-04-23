import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GetUserDataService } from './services/user-data/user-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [GetUserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
