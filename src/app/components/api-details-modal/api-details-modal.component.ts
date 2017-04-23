    import { Component } from '@angular/core';
    import {apiService} from '../../services/api-services/api.service'
// import {MdButtonModule} from '@angular/material';

@Component({
  selector: 'api-details',
  templateUrl: './api-details-modal.component.html',
  styleUrls: ['./api-details-modal.component.scss'],
//   providers: [apiService]
})
export class apiDetailsComponent { 
    apiService:any;
    constructor()
    {
        

    }
    ngOnInit()
    {
        this.apiService.getApiDetails().then(heroes=>console.log(heroes));
    }
}