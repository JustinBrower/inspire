import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"



async function _drawImage() {
    // THIS GIVES AN ERROR FOR TEMPLATE
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
        _getImage()
    }
}