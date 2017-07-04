import {Category} from "./category.model";
export class User {

  constructor(public email: string, public categories: Category[] ) {}

}
