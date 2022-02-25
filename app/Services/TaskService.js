import { ProxyState } from "../AppState.js";
import { TaskController } from "../Controllers/TaskController.js";
import { Task } from "../Models/Task.js";



class TaskService {
    createTask(newTask) {
        let realTask = new Task(newTask)
        ProxyState.tasks.push(realTask)
        ProxyState.tasks = ProxyState.tasks

    }

}











export const taskService = new TaskService