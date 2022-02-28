import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"





async function _getWeather() {
    try {
        await weatherService.getWeather()
    } catch (error) {
        console.log(error);
    }
}

async function _drawWeather() {

}

export class WeatherController {
    constructor() {
        console.log("WeatherController Loaded...");
        ProxyState.on("weather", _drawWeather)
        _getWeather()
    }
}