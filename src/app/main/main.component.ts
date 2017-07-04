import { Component, OnInit } from '@angular/core';
import {Category} from "../category.model";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  categories: Category[] =[
    new Category(1,"Pets"),
    new Category(2,"Instruments")
  ]


  goToDetail(clickedCategory: Category){
      console.log("it clicked!");
      this.router.navigate(['category', clickedCategory.id])
  }
}
