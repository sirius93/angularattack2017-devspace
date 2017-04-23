import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms';
import {apiDetailsComponent} from '../api-details-modal/api-details-modal.component'
import {apiService} from '../../services/api-services/api.service'
import {MdDialog, MdDialogRef} from '@angular/material';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [apiService],
  
})
export class HomepageComponent {
  apis:api[];
  userName:string;
  userEmail:string;
  userImage:string;
  allapis:any;
  stateCtrl: FormControl;
  filteredApis: any;
 selectedOption:any;
  apiList = [];

  constructor(public dialog: MdDialog,private apiDetails:apiService) {
    this.stateCtrl = new FormControl();
    this.filteredApis = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterApis(name));
    this.apiDetails.getUserData().subscribe(user =>{
      this.userEmail=user.emails[0];
      this.userName=user.name.givenName+" "+user.name.familyName;
      this.userImage=user.image.url;
      console.log(this.userImage);
    })
    this.apiDetails.getApiList().subscribe(apis => this.apis=apis);
     this.apiDetails.getAllApis().subscribe(apis => {this.allapis=apis;
       
 
       this.apiList.push(apis[0].Category);
       
       console.log(apis[0])});
  }

  openDialog(api) {
    let dialogRef = this.dialog.open(apiDetailsComponent);
    this.apiDetails.setApiDetails(api);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  filterApis(val: string) {
    return val ? this.apiList.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.apiList;
  }
}
interface api{
  id:number,
  API:string,
  Description:string,
  tags:string[]
}
