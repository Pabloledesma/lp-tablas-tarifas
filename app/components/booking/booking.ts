import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { origins, destinations } from '../../data/mock-places';
import { Flight } from '../../model/flight';

@Component({
	selector: 'booking',
	templateUrl: 'app/components/booking/booking.html'
	
})

export class Booking {

	public origins = origins;
	public destinations = destinations;
	public adults = [1, 2, 3, 4, 5, 6, 7, 8];
	public childrens = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	public infants = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	flight = new Flight(
		true,	 
		false, 
		origins[4], 
		destinations[3],
		true,
		false,
		new Date('28/07/2016'),
		new Date('02/08/2016'),
		1,
		0,
		0
	);

	submitted = false;
  	onSubmit() { this.submitted = true; }

  	
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.flight); }

}

