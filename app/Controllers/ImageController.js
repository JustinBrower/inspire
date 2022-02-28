import { imageService } from "../Services/ImageService.js"



async function _drawImage() {
    document.getElementById('image').innerHTML = bgImage
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
        _getImage()
        _drawImage()
    }
}