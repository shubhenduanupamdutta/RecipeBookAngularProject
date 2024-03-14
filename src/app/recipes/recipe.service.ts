import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test2',
      'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_1280.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
