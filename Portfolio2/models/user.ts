import { Category } from './category';

export interface User {
    ID: string,
    Gender: Gender,
    Prefered: Category["ID"],
    Birthday: Date,
    Username: string,
    Cash: number
  }

export enum Gender {
    Male,
    Female
}
