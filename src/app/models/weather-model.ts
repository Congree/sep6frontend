export class WeatherModel {
    public temperatureInFahrenheit: number;
    public temperatureInCelsius: number;
    public dateTime: Date; 

    constructor(
        temperatureInFahrenheit: number,
        temperatureInCelsius: number,
        dateTime: Date,
    ) {
        this.temperatureInFahrenheit = temperatureInFahrenheit;
        this.temperatureInCelsius = temperatureInCelsius;
        this.dateTime = dateTime;
    }
}
