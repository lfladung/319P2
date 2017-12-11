import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent
{
  userProf: any;
  inventory: any=[];

  constructor() {
    this.userProf = JSON.parse(localStorage.getItem("User"));
    this.inventory = this.userProf.inventory;
    console.log(this.userProf);
  }

  addMoney(){
    this.userProf.Cash += 20;
    localStorage.setItem("User", JSON.stringify(this.userProf));
  }
}
