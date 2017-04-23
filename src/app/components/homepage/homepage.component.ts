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
  stateCtrl: FormControl;
  filteredStates: any;
  selectedOption:any;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  constructor(public dialog: MdDialog,private apiDetails:apiService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
    this.apiDetails.getApiList().subscribe(apis => this.apis=apis)
  }

  openDialog(api) {
    let dialogRef = this.dialog.open(apiDetailsComponent);
    this.apiDetails.setApiDetails(api);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }
}
interface api{
  id:number,
  API:string,
  Description:string,
  tags:string[]
}
