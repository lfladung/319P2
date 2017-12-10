import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent 
{
  userProf: any;
  
  constructor() {
    this.userProf = JSON.parse(localStorage.getItem("User"));
    console.log(this.userProf);
  }
}