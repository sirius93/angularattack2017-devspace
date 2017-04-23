import { GetUserDataService } from '../../services/user-data/user-data.service';
import { _document } from '@angular/platform-browser/src/browser';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
// import 'rxjs/add/operator/subscribe';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit{
  
  constructor(
    private getUserDataService: GetUserDataService  
  ) {}
  userDetails={}
    // this.data=this.getUserDataService.getUserDetails()
    // console.log(this.data);
    ngOnInit(){
      this.getUserDataService.getUserDetails().subscribe(data=>this.userDetails=data)
      console.log(this.userDetails+"ho")
    }
    
}
