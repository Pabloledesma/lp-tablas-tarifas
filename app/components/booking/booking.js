System.register(['@angular/core', '../../data/mock-places', '../../model/flight'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_places_1, flight_1;
    var Booking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_places_1_1) {
                mock_places_1 = mock_places_1_1;
            },
            function (flight_1_1) {
                flight_1 = flight_1_1;
            }],
        execute: function() {
            Booking = (function () {
                function Booking() {
                    this.origins = mock_places_1.origins;
                    this.destinations = mock_places_1.destinations;
                    this.adults = [1, 2, 3, 4, 5, 6, 7, 8];
                    this.childrens = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    this.infants = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    this.flight = new flight_1.Flight(true, false, mock_places_1.origins[2].name, mock_places_1.destinations[3].name, true, false, new Date('07/28/2016'), new Date('08/02/2016'), 1, 0, 0);
                    this.submitted = false;
                }
                Booking.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(Booking.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.flight); },
                    enumerable: true,
                    configurable: true
                });
                Booking = __decorate([
                    core_1.Component({
                        selector: 'booking',
                        templateUrl: 'app/components/booking/booking.html',
                        styleUrls: ['app/components/booking/booking.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Booking);
                return Booking;
            }());
            exports_1("Booking", Booking);
        }
    }
});
//# sourceMappingURL=booking.js.map