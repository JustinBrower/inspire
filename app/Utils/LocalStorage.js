import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


export function saveState() {
    localStorage.setItem('inspire', JSON.stringify({
        tasks: ProxyState.tasks,
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('inspire'))
    console.log('loaded data', data)
    if (data != null) {
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
}