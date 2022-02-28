import { ProxyState } from "../AppState.js";
import { sandboxApiQ } from "./AxiosService.js"
import { Quote } from "../Models/Quote.js";



class QuotesService {
    async getQuotes() {
        const res = await sandboxApiQ.get()
        console.log("Getting Quotes...", res.data);
        ProxyState.quotes = res.data
        console.log("Quotes object is...", ProxyState.quotes);
    }
}



export const quotesService = new QuotesService()