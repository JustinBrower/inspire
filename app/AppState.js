// import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// const testTask = new Task(
//   {
//     completed: false,
//     description: "Test Task"
//   })


class AppState extends EventEmitter {

  /** @type {import('./Models/Task').tasks[]} */

  tasks = []

  /** @type {import('./Models/Quote').quotes{}} */

  quotes = {}

  /** @type {import('./Models/Image').image{}} */

  image = {}

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
