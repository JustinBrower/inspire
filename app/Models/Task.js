import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.checked = data.checked || false
        this.text = data.text
    }

    get TaskTemplate() {
        // NEED THIS TO RETURN CHECKED WHEN CHECKED
        return `
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
            <input class="form-check-input me-2" type="checkbox" value="" ${this.checked} aria-label="..." / onclick="app.taskController.setChecked('${this.id}')">${this.text}
            <div class="d-flex justify-content-end mdi mdi-trash-can mdi-24px" onclick="app.taskController.deleteTask('${this.id}')"></div></li>
        `
    }
}