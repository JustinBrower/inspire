import { ProxyState } from "../AppState.js";
import { sandboxApiW } from "./AxiosService.js";





class WeatherService {
    async getWeather() {
        const res = await sandboxApiW.get()
        console.log("Getting Weather...", res.data);
        console.log("Temperature is...", res.data.main.temp);
        ProxyState.weather = res.data
    }
}



export const weatherService = new WeatherService()