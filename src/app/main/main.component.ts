import { Component, OnInit } from '@angular/core';
import {Category} from "../category.model";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  categories: Category[] =[
    new Category(1,"Pets"),
    new Category(2,"Instruments")
  ]

}
