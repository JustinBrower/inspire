import { TaskController } from "./Controllers/TaskController";

class App {
  taskController = new TaskController();
}

window["app"] = new App();
