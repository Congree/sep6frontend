export class FlighsModel {
    public month: string; // this is the month name
    public flights: number; // this is the flights number
    public numberOfFlights: number; // nr of flights to origin from destination
    public destination: string;
    public origin: string;
    public monthNr: number;
    public arrivalDelay: number;
    public departureDelay: number;
    public percentage: number;

    constructor(
        month :string,
        flights:number,
        numberOfFlights: number,
        destination: string,
        origin: string,
        monthNr: number,
        arrivalDelay: number,
        departureDelay: number,
        percentage: number,
    ) {
        this.month = month;
        this.flights = flights;
        this.numberOfFlights = numberOfFlights;
        this.destination = destination;
        this.origin = origin;
        this.monthNr = monthNr;
        this.arrivalDelay = arrivalDelay;
        this.departureDelay = departureDelay;
        this.percentage = percentage;
    }

}
