export class PlanesModel {
    public tailNumber: string;
    public year: number;
    public type: string;
    public manufacturer: string;
    public model: string;
    public engines: number;
    public seats: number;
    public speed: number;
    public engine: string;
    public planes: number;
    public numberOfPlanes: number;
    public numberOfFlights: number;

    constructor(
    tailNumber: string,
    year: number,
    type: string,
    manufacturer: string,
    model: string,
    engines: number,
    seats: number,
    speed: number,
    engine: string,
    planes: number,
    numberOfPlanes: number,
    numberOfFlights:number,
    ) {
        this.tailNumber = tailNumber;
        this.year = year;
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.engines = engines;
        this.seats = seats;
        this.speed = speed;
        this.engine = engine;
        this.planes = planes;
        this.numberOfPlanes = numberOfPlanes;
        this.numberOfFlights = numberOfFlights;
    }
}
