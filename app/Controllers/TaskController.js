import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js"





// async function _getTasks() {
//     try {
//         await taskService.getTasks()
//     } catch (error) {
//         Pop.toast(error.message, 'error')
//         console.error(error);
//     }
// }

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
        // _getTasks()
        loadState()
    }
    async createTask() {
        window.event.preventDefault()
        let form = window.event.target
        let newTask = {
            completed: false,
            description: form.name.value
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