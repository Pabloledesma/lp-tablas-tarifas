import { Component } from '@angular/core';
import { origins, destinations } from '../../data/mock-places';

@Component({
	selector: 'booking',
	templateUrl: 'app/components/booking/booking.html'
	
})

export class Booking {

	public origins = origins;
	public destinations = destinations

}

