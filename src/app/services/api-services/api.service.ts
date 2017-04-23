// import * as http from 'http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class apiService {
    api:Object;
    constructor(private http:Http){
        console.log('service initialized ')
        // this.api=2; 
    }
    ngOnInit(){
      
    }

    getAllApis(){
return this.http.get('https://api.myjson.com/bins/7l3qj').map(res=>res.json())
    }

    getApiList(){
        return this.http.get('https://api.myjson.com/bins/cpn97').map(res=>res.json())
    }
    setApiDetails(api:Object){
        this.api=api;
        // console.log(this.api);
    }
    getApiDetails(){
        // console.log(this.api);
        return this.api;
    }
}