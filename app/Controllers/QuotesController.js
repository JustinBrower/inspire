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
    let template = ''
    // NEED THIS TO GO THROUGH THE OBJECT AND PRINT TEMPLATE
    // ProxyState.quotes.forEach(q => template += q.QuotesTemplate)
    document.getElementById('quotes-message').innerHTML = template
}

export class QuotesController {
    constructor() {
        console.log("QuotesController Loaded...");
        ProxyState.on("quotes", _drawQuotes)
        _getQuotes()
    }
}