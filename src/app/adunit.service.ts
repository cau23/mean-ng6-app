// Ad Unit service to send HTTP requests
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

	uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price) {
  	const obj = {
  		unit_name: unit_name,
  		unit_price: unit_price
  	};
  	this.http.post(`${this.uri}/add`, obj)
  		.subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
            .http
            .get(`${this.uri}/adunits`);
  }

}
