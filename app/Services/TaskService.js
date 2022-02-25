import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";



class TaskService {
    createTask(newTask) {
        let realTask = new Task(newTask)
        ProxyState.tasks.push(realTask)
        ProxyState.tasks = ProxyState.tasks
    }

    deleteTask(id) {
        let doomedTask = ProxyState.tasks.find(t => t.id == id)
        ProxyState.tasks.splice(doomedTask, 1)
        ProxyState.tasks = ProxyState.tasks
        console.log("Deleted", doomedTask);
    }
    setChecked(id) {
        let checkedTask = ProxyState.tasks.find(t => t.id == id)
        if (checkedTask.checked === "checked")
            checkedTask.checked = ""
        else {
            checkedTask.checked = "checked"
        }
        ProxyState.tasks = ProxyState.tasks
    }
}











export const taskService = new TaskService