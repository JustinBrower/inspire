import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.completed = data.completed || false
        this.user = data.user
        this.description = data.description
    }

    get TaskTemplate() {
        // NEED THIS TO RETURN CHECKED WHEN CHECKED
        return `
        <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
            <input class="form-check-input me-2" type="checkbox" value="" ${this.completed} aria-label="..." / onclick="app.taskController.setChecked('${this.id}')">${this.description}
            <div class="d-flex justify-content-end mdi mdi-trash-can mdi-24px" onclick="app.taskController.deleteTask('${this.id}')"></div></li>
        `
    }
}