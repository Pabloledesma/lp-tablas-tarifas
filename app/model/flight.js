System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Flight;
    return {
        setters:[],
        execute: function() {
            Flight = (function () {
                function Flight(round, oneWay, from, to, economy, bussines, departureDate, returnDate, adults, childrens, infants) {
                    if (round === void 0) { round = true; }
                    if (economy === void 0) { economy = true; }
                    if (adults === void 0) { adults = 1; }
                    if (childrens === void 0) { childrens = 0; }
                    if (infants === void 0) { infants = 0; }
                    this.round = round;
                    this.oneWay = oneWay;
                    this.from = from;
                    this.to = to;
                    this.economy = economy;
                    this.bussines = bussines;
                    this.departureDate = departureDate;
                    this.returnDate = returnDate;
                    this.adults = adults;
                    this.childrens = childrens;
                    this.infants = infants;
                }
                return Flight;
            }());
            exports_1("Flight", Flight);
        }
    }
});
//# sourceMappingURL=flight.js.map