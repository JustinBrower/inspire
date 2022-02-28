import { ProxyState } from "../AppState.js";
import { sandboxApiI } from "./AxiosService.js";






class ImageService {
    async getImage() {
        const res = await sandboxApiI.get()
        console.log("Getting Image...", res.data);
        ProxyState.image = res.data
    }
}


export const imageService = new ImageService()