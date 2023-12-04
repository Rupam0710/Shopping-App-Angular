import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomato', 10),
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    public IngredientAdded(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
    }

}