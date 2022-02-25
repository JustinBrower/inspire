import { ProxyState } from "../AppState.js";



function _drawTasks() {
    let template = ''
    ProxyState.tasks.forEach(t => template += t.TaskTemplate)
    document.getElementById('tasks').innerHTML = template
}

export class TaskController {
    constructor() {
        console.log("TaskController Loaded...");
        ProxyState.on("tasks", _drawTasks)
    }
    createTask() {
        window.event.preventDefault()
        let form = window.event.target
        let newTask = {
            isDone: false,
            text: form.text.value
        }
        console.log(newTask);
        taskService.createTask(newTask)
    }
}





_drawTasks()