import { ProxyState } from "../AppState.js";
import { sandboxApiQ } from "./AxiosService.js"



class QuotesService {
    async getQuotes() {
        const res = await sandboxApiQ.get()
        console.log("Getting Quotes...", res.data);
        ProxyState.quotes = res.data
    }
}



export const quotesService = new QuotesService()