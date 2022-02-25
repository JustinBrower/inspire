import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(data) {
        this.id = generateId()
        this.isDone = data.isDone || false
        this.text = data.text
    }

    get TaskTemplate() {
        // NEED THIS TO RETURN CHECKED WHEN CHECKED
        return `
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
            <input class="form-check-input me-2" type="checkbox" value="" ${this.isDone} aria-label="..." />${this.text}</li>
        `
    }
}