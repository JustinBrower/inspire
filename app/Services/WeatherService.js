import { ProxyState } from "../AppState.js";
import { sandboxApiW } from "./AxiosService.js";



let orTemp = true


class WeatherService {
    async getWeather() {
        const res = await sandboxApiW.get()
        console.log("Getting Weather...", res.data);
        ProxyState.weather = res.data
    }

    async switchWeather() {
        (orTemp = !orTemp)
    }

    async drawWeather() {
        let temperature = ProxyState.weather.main.temp
        let f = Math.round(((9 / 5) * (temperature - 273)) + 32)
        let c = Math.round(temperature - 273)

        let template = ''

        if (orTemp == true) {
            template = `<div onclick="app.weatherController.switchWeather()"><h2>${f} Degrees Farenheit</h2></div>`
        } else {
            template = `<div onclick="app.weatherController.switchWeather()"><h2>${c} Degrees Celsius</h2></div>`
        }
        document.getElementById('temp').innerHTML = template
    }
}

export const weatherService = new WeatherService()