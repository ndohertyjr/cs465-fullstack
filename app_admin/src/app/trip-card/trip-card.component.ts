import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})

export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      //Confirm delete
      localStorage.removeItem("tripCode");
      localStorage.setItem("tripCode", trip.code);
      this.router.navigate(['delete-trip']);
    

    } else {
      console.log('Trip ' + trip.code + 'not deleted.');
    }
  }
}