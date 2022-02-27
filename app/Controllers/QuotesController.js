import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"


async function _getQuotes() {
    try {
        await quotesService.getQuotes()
    } catch (error) {
        console.log(error);
    }
}

async function _drawQuotes() {
    template = ''
    ProxyState.quotes.forEach(q => template += q.QuotesTemplate)
    document.getElementById('quotes-message').innerHTML = template
}

export class QuotesController(){

}