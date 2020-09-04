export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.celcius = this.kelvin -273
    this.farenheit = (this.celcius*1.8)+32
    this.description = data.weather[0].description
  }
}