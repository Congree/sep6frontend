export class FlighsModel {
    public month: string; // this is the month name
    public flights: number; // this is the flights number
    public numberOfFlights: number; // nr of flights to origin from destination
    public destination: string;
    public origin: string;

    constructor(
        month :string,
        flights:number,
        numberOfFlights: number,
        destination: string,
        origin: string,
    ) {
        this.month = month;
        this.flights = flights;
        this.numberOfFlights = numberOfFlights;
        this.destination = destination;
        this.origin = origin;
    }

}
