import { Component } from '@angular/core';
import { Booking } from '../booking/booking';
import { Navigation } from '../navigation/navigation';


@Component({
	selector: 'super-lp',
	templateUrl: 'app/components/app/app.html',
	directives: [Booking, Navigation]
})

export class App {
	title = 'Super Landing Page';
	subTitle = 'This landing page is build whit Angular2!';
}