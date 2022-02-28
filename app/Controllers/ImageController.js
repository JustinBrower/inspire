import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

/// DRAWING THE CLOCK HERE HOPE THATS CHILL

async function _findTime() {
    console.log("Setting Clock...");
    setInterval(_drawClock, 1000)
}

let military = true
async function _drawClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM"

    if (military == false) {
        if (hours > 12) {
            hours = hours - 12
            ampm = "PM"
        }
        if (hours == 0)
            hours = 12
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        let template = `<div onclick="app.imageController.switchTime()"><h1>${hours}:${minutes}:${seconds}${ampm}</h1></div>`
        document.getElementById('clock').innerHTML = template

    } else {
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        let template = `<div onclick="app.imageController.switchTime()"><h1>${hours}:${minutes}:${seconds}</h1></div>`
        document.getElementById('clock').innerHTML = template
    }
}

async function switchTime() {
    military = !military
}


/// END CLOCK TEMPLATE



async function _getImage() {
    try {
        await imageService.getImage()
    } catch (error) {
        console.log(error);
    }
}

/// CANT GET THIS TO LOAD/FIT PROPERLY
async function _drawImage() {
    let template = `<div><img src="${ProxyState.image.largeImgUrl}" alt="background image"></img></div>`
    document.getElementsByClassName('bgImage').innerHTML = template
    console.log("image template is...", template);
}


export class ImageController {
    constructor() {
        console.log("ImageController Loaded...");
        ProxyState.on("image", _drawImage)
        _findTime()
        _getImage()
        _drawImage()
        switchTime()
    }
}