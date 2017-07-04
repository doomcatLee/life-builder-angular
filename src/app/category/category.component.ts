import { Component, OnInit } from '@angular/core';
import {Item} from "../item.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  items: Item[] = [
    new Item(1,"Golden Retriever", "$800"),
    new Item(2,"Labrador", "$500"),
    new Item(3,"Shi Zhu", "$200")
  ]

}
