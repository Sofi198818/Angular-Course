import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('a test Recipe', 'this is simple test', 'https://img.delicious.com.au/as9f5odu/w1200/del/2017/07/ziti-timballo-49588-1.jpg'),
  new Recipe('a test Recipe', 'this is simple test', 'https://img.delicious.com.au/as9f5odu/w1200/del/2017/07/ziti-timballo-49588-1.jpg')
]
  constructor() { }

  ngOnInit(): void {
  }

}
