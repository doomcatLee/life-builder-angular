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
    new Item("Golden Retriever", "$800"),
    new Item("Labrador", "$500"),
    new Item("Shi Zhu", "$200")
  ]

}
