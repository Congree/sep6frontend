export class FlighsPerMonthModel {
    public month: string; // this is the month name
    public flights: number; // this is the flights number

    constructor(
        month :string,
        flights:number,
    ) {
        this.month = month;
        this.flights = flights;
    }

}
