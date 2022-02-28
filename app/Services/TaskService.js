import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { sandboxApiT } from "./AxiosService.js";



class TaskService {
    async getTasks() {
        const res = await sandboxApiT.get()
        console.log('Getting Tasks...', res.data);
        ProxyState.tasks = res.data.map(t => new Task(t))
    }

    async createTask(newTask) {
        const res = await sandboxApiT.post('', newTask)
        console.log("Creating Task in Server...", res.data);
        ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
        console.log("Created Task");
    }

    async deleteTask(id) {
        await sandboxApiT.delete(id)
        console.log('Deleting Task from Server...');
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
        console.log("Deleted Task");
    }

    async setChecked(id) {
        let checkedTask = ProxyState.tasks.find(t => t.id == id)
        checkedTask.completed = !checkedTask.completed
        await sandboxApiT.put('/' + id, checkedTask)
    }
}











export const taskService = new TaskService