import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Masala Dosa',
      'A south indian all time any time dish.',
      'https://media.gettyimages.com/id/1212684210/photo/south-indian-breakfast-dosa.jpg?s=2048x2048&w=gi&k=20&c=tgIqvK0z37fMZCPadGgAlLmTKJtjxP7WgU1PVMmGeCE=',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Potato', 2),
        new Ingredient('Onion', 1),
      ]
    ),
    new Recipe(
      'Samosa',
      'A ubiquitous north indian snack.',
      'https://media.gettyimages.com/id/1317460663/photo/close-up-of-fried-food-on-table-west-chester-pennsylvania-united-states-usa.jpg?s=2048x2048&w=gi&k=20&c=K0RXgb4QQDQz8VoCqUuVFq9N9b0CcgbCMKSaFge2J7g=',
      [
        new Ingredient('Potato', 2),
        new Ingredient('Peas', 1),
        new Ingredient('Flour', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
