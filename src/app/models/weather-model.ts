export class WeatherModel {
    public temperatureInFahrenheit: number;
    public temperatureInCelsius: number;
    public dateTime: Date;
    public origin: string; 
    public observations: number;
    public dailyMeanTemperatureInCelsius: number;

    constructor(
        temperatureInFahrenheit: number,
        temperatureInCelsius: number,
        dateTime: Date,
        origin: string,
        observations: number,
        dailyMeanTemperatureInCelsius: number,
    ) {
        this.temperatureInFahrenheit = temperatureInFahrenheit;
        this.temperatureInCelsius = temperatureInCelsius;
        this.dateTime = dateTime;
        this.origin = origin;
        this.observations = observations;
        this.dailyMeanTemperatureInCelsius = dailyMeanTemperatureInCelsius;
    }
}
