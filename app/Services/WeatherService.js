import { ProxyState } from "../AppState.js";
import { sandboxApiW } from "./AxiosService.js";



let orTemp = true


class WeatherService {
    async getWeather() {
        const res = await sandboxApiW.get()
        console.log("Getting Weather...", res.data);
        console.log("Temperature is...", res.data.main.temp);
        ProxyState.weather = res.data
    }

    async switchWeather() {
        (orTemp = !orTemp)
        console.log(orTemp);
    }

    async drawWeather() {
        let temperature = ProxyState.weather.main.temp
        console.log(temperature);
        let f = Math.round(((9 / 5) * (temperature - 273)) + 32)
        let c = Math.round(temperature - 273)
        console.log("f is...", f);
        console.log("c is...", c);

        let template = ''

        if (orTemp == true) {
            template = `<div onclick="app.weatherController.switchWeather()">${f} Degrees Farenheit</div>`
        } else {
            template = `<div onclick="app.weatherController.switchWeather()">${c} Degrees Celsius</div>`
        }
        document.getElementById('temp').innerHTML = template
    }
}

export const weatherService = new WeatherService()