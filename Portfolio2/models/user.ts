import { Category } from './category';

export interface User {
    ID: string,
    Gender: Gender,
    Prefered: Category,
    Birthday: Date,
    Username: string,
    Cash: number
}

export enum Gender {
    Male,
    Female
}