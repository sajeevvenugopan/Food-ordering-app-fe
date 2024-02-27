export interface FoodItem {
    id?: number;
    itemName?: string;
    itemDescription?: string;
    isVeg?: boolean;
    price?: number | undefined;
    restaurantId?: number;
    quantity?: number | undefined;
}