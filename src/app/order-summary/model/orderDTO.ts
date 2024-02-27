import { FoodItem } from "../../shared/models/fooditem";
import { Restaurant } from "../../shared/models/restaurant";

export interface OrderDTO {
    foodItems?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}