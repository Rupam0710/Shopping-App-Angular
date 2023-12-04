import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomato', 10),
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    public IngredientAdded(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredients[]) {
        // for(let ingredient of ingredients){
        //     this.IngredientAdded(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}