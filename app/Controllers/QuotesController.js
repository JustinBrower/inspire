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
    let template = `<div class="justify-content-center align-items-center">
        <div class="text-light">${ProxyState.quotes.content}</div>
        </div>
        <div id="author" class="d-flex justify-content-center align-items-center">
        <div class="text-light">${ProxyState.quotes.author}</div>
        </div>`
    document.getElementById('quotes-message').innerHTML = template
}

export class QuotesController {
    constructor() {
        console.log("QuotesController Loaded...");
        ProxyState.on("quotes", _drawQuotes)
        _getQuotes()
    }
}