import { TaskController } from "./Controllers/TaskController.js";

class App {
  taskController = new TaskController();
}

window["app"] = new App();
