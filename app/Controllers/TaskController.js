import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";



function _drawTasks() {
    let template = ''
    ProxyState.tasks.forEach(t => template += t.TaskTemplate)
    document.getElementById('tasks').innerHTML = template
}

export class TaskController {
    constructor() {
        console.log("TaskController Loaded...");
        ProxyState.on("tasks", _drawTasks)
        ProxyState.on("tasks", saveState)
        loadState()
    }
    async createTask() {
        window.event.preventDefault()
        let form = window.event.target
        let newTask = {
            isDone: false,
            text: form.text.value
            // this isnt working correctly
        }
        console.log(newTask);
        taskService.createTask(newTask)
    }
    async deleteTask(id) {
        console.log("deleting task...");
        taskService.deleteTask(id)
    }
    async setChecked(id) {
        console.log("checking task...");
        taskService.setChecked(id)
    }
}
_drawTasks()