import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';



@Injectable()
export class TripDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  //Create
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(`${this.apiBaseUrl}trips`, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  //Read - All trips
  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  //Read - Single trip
  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  //Update
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  //Delete
  public deleteTrip(tripCode: string){
    console.log('Inside TripDataService#deleteTrip');
    try {
      console.log('Trying to delete from TripDataService#deleteTrip');
      this.http.delete(this.tripUrl + tripCode).subscribe(()=> console.log("Deleted."));
    } catch (error) {
      this.handleError(error);
    }
  }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone horribly wrong', error); //demo error code
    return Promise.reject(error.message || error);
  }
  
  public login(user: User): Promise<AuthResponse> {
    console.log("Called trip data login")
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    console.log("Called trip data register")
    return this.makeAuthApiCall('register', user);
  }

  public makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    console.log("Called trip data API call")
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http  
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }
}
