import { sandboxApiI } from "./AxiosService";






class ImageService {
    constructor() {
        const res = await sandboxApiI.get()
        console.log("Getting Image...", res.data);
    }
}


export const imageService = new ImageService()