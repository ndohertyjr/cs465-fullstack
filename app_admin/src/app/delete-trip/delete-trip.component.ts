import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {


  deleteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {

    //retrieve stashed tripId from browser local storage
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something went wrong.  I couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }
    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);
    this.tripService.deleteTrip(tripCode);

    console.log('DeleteTripComponent#onInit delete trip ' + tripCode);
  }

  ngOnDelete() {
    this.router.navigate(['']);
  }
}
