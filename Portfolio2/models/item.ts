import {Category} from './category';

export interface Item {
    ID: string,
    Title: string,
    Category: Category,
    Price: number,
    Stock: number,
    URL: URL
}