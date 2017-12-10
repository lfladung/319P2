import { Component, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../services/categories.service';
import { UserService, } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent 
{   
    @ViewChild('username') username: ElementRef;
    @ViewChild('password') password: ElementRef;

    registerForm: FormGroup;
    
    constructor(private UserService: UserService, private router: Router, private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            username: [null, Validators.required],
            password: [null,Validators.required],
            gender: [null, Validators.required],
            prefered: [],
            birthday: [null, Validators.required],
            cash: [0, Validators.required]
        });
    }

    HandleLoginSubmit() {
        this.UserService.login(this.username.nativeElement.value, this.password.nativeElement.value).subscribe(res => {
            localStorage.setItem("User", JSON.stringify(res));
            this.router.navigate(['shop', 1]);
        }, err => {
            console.log(err);
        } );
    }

    HandleRegisterSubmit() {
        let value = this.registerForm.value;
        this.UserService.register(value.username, value.password, value.gender, value.prefered, value.birthday, value.cash).subscribe(res => {
            localStorage.setItem("User", JSON.stringify(res));
            this.router.navigate(['shop', 1]);
        }, err => {
            console.log(err);
        })
    }
}