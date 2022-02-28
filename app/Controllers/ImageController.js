import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

/// DRAWING THE CLOCK HERE HOPE THATS CHILL

async function _findTime() {
    console.log("setting time interval...");
    setInterval(_drawClock, 1000)
}

async function _drawClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let late = "AM"
    if (hours > 12) {
        hours = hours - 12
        late = "PM"
    }
    let template = `<div>${hours}:${minutes}:${seconds}${late}</div>`
    console.log(template);
    document.getElementById('clock-widget').innerHTML = template
}

/// END CLOCK TEMPLATE




async function _drawImage() {
    let template = `<img src="${ProxyState.image.largeImgUrl}" alt="background image"></img>`
    document.getElementById('image').innerHTML = template
    console.log("The Controller logs template as...", template);
}

async function _getImage() {
    try {
        await imageService.getImage()
    } catch (error) {
        console.log(error);
    }
}

export class ImageController {
    constructor() {
        console.log("ImageController Loaded...");
        ProxyState.on("image", _drawImage)
        _findTime()
        _getImage()
    }
}