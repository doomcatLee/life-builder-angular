import { Component, OnInit } from '@angular/core';
import { Category } from "../category.model";
import { Item } from "../item.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  items: Item[] = [
    new Item("Austrailian Shepherd", "$600"),
    new Item("Golden Retreiver", "$1000"),
    new Item("Lab", "$200")
  ]


}
