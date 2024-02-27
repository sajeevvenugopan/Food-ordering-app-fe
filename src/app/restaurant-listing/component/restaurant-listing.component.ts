import { Component } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList : Restaurant[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantService: RestaurantService) { }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    );
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(): string {
    const imageCount = 8;
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`;
  }

  getReviewCount() : number {
    const reviewCount = this.getRandomNumber(300, 900);
    return reviewCount;
  }

  onButtonClick(id:number) {
    this.router.navigate(['/food-catalogue', id]); 
  }
  
}