export class Flight {

	constructor(
		public round: boolean = true,
		public oneWay: boolean,	
		public from: string,
		public to: string,
		public economy: boolean = true,
		public bussines: boolean,
		public departureDate: Date,
		public returnDate: Date,
		public adults: number = 1,
		public childrens?: number = 0,
		public infants?: number = 0   
	){}

}