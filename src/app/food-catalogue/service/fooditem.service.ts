import { Injectable } from "@angular/core";
import { API_URL_FC } from "../../constants/url";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { error } from "console";

@Injectable({
    providedIn: 'root'
})

export class FoodItemService {
    private apiUrl = API_URL_FC + '/foodcatalogue/fetchrestaurantandfooditemsbyid/';
    constructor(private http: HttpClient) { }

    getFoodItemsByRestaurant(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl + id}`)
        .pipe(
            catchError(this.handleError)
        );
    }
    handleError(error: any) {
        console.error(`An error occured:`,error);
        return throwError(error.message || error);
    }
}