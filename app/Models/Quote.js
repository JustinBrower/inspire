



export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }


    get QuotesTemplate() {
        return `
    <div class="justify-content-center align-items-center">
    <span>${this.content}</span>
    <span>${this.author}</span>
    </div>`
    }


}