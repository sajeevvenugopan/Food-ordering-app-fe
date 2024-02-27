import { Injectable } from "@angular/core";
import { API_URL_RL } from "../../constants/url";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private apiUrl = API_URL_RL+'/restaurant/fetchAllRestaurants';

    constructor(private http: HttpClient) { }

    getAllRestaurants(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}`)
          .pipe(
            catchError(this.handleError)
          );
      }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(error.message || error);
    }
}

function getAllRestaurants() {
    throw new Error("Function not implemented.");
}
