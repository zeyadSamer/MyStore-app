import { Injectable } from '@angular/core';
import User from 'src/app/Models/User';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDetails:any;
  

  constructor() { }



  submitUserDetails(user:User){

  this.userDetails={...user};
  //handle posting to api logic

    
  }

  getUserDetails(){
    return this.userDetails;
  }

}

