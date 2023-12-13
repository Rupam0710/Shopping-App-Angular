import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://www.recipetineats.com/wp-content/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg',
            [
                new Ingredients('Bun', 1),
                new Ingredients('Meat', 1),
                new Ingredients('Mayonees', 1),
            ]
        ),
        new Recipe('KFC - Chicken Wings',
            'Its finger licking good',
            'https://images.jdmagicbox.com/comp/mohali/c4/0172px172.x172.220923165644.r2c4/catalogue/kfc-mohali-fried-chicken-restaurants-0zvnbgfdiq.jpg?clr=',
            [
                new Ingredients('Meat', 12),
                new Ingredients('Salad', 2),

            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    public getRecipes() {
        return this.recipes.slice();
    }

    public getRecipe(index: number) {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}