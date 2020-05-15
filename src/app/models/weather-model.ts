export class WeatherModel {
    public temperatureInFahrenheit: number;
    public temperatureInCelsius: number;
    public dateTime: Date;
    public origin: string; 

    constructor(
        temperatureInFahrenheit: number,
        temperatureInCelsius: number,
        dateTime: Date,
        origin: string,
    ) {
        this.temperatureInFahrenheit = temperatureInFahrenheit;
        this.temperatureInCelsius = temperatureInCelsius;
        this.dateTime = dateTime;
        this.origin = origin;
        
    }
}
