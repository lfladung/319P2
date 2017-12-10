import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../../models/category';
import { Gender } from '../../../models/user';
@Injectable()

export class UserService {
    constructor(private http: HttpClient) {

    }
    
    login(User: string, Password: string) {
        return this.http.post('http://localhost:5000/api/login', {Username: User, Password: Password});
    }
    register(Username: string, Password: string, Gender: Gender, Prefered: Category, Birthday: Date, Cash: number){
        return this.http.post('http://localhost:5000/api/register', {Username: Username, Password: Password, Gender: Gender, Prefered: Prefered, Birthday: Birthday, Cash: Cash})
    }
}
