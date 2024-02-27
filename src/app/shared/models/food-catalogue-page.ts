import { Restaurant } from "./restaurant";
import { FoodItem } from "./fooditem";

export interface FoodCataloguePage {
    foodItems: FoodItem[];
    restaurant: Restaurant;
}