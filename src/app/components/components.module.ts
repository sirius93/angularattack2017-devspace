import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ApiformComponent } from './apiform/apiform.component';
import { allAppRoutings } from '../routes/index.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { GetUserDataService } from '../services/user-data/user-data.service';

@NgModule({
  imports: [
    CommonModule,
    allAppRoutings
  ],
  declarations: [LoginButtonComponent, ApiformComponent, HomepageComponent],
  exports:[
    LoginButtonComponent,
    ApiformComponent,
    HomepageComponent
  ],
  providers:[GetUserDataService]
})
export class ComponentsModule { }
