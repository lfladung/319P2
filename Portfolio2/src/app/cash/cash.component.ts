import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html'
})
export class CashComponent
{
    @ViewChild('cash') cash: ElementRef;

    constructor() {
        
    }

}
