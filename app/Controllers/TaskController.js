import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { Pop } from "../Utils/Pop.js"





async function _getTasks() {
    try {
        await taskService.getTasks()
    } catch (error) {
        Pop.toast(error.message, 'error')
        console.error(error);
    }
}

function _drawTasks() {
    let template = ''
    ProxyState.tasks.forEach(t => template += t.TaskTemplate)
    document.getElementById('tasks').innerHTML = template
}

export class TaskController {
    constructor() {
        console.log("TaskController Loaded...");
        ProxyState.on("tasks", _drawTasks)
        _getTasks()
    }
    async createTask() {
        window.event.preventDefault()
        let form = window.event.target
        let newTask = {
            description: form.name.value
        }
        console.log(newTask);
        try {
            taskService.createTask(newTask)
        } catch (error) { console.log(error); }
    }

    async deleteTask(id) {
        if (await Pop.confirm())
            try {
                console.log("Deleting task...");
                await taskService.deleteTask(id)
            } catch (error) { console.log(error); }
    }

    async setChecked(id) {
        console.log("checking task...");
        try {
            taskService.setChecked(id)
        } catch (error) { console.log(error); }
    }
}
_drawTasks()