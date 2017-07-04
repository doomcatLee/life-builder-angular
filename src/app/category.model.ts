import { Item } from "./item.model";
export class Category {

  constructor(public name: string, public items: Item[]){}
}
