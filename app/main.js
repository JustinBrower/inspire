import { TaskController } from "./Controllers/TaskController.js";
import { QuotesController } from "./Controllers/QuotesController.js"

class App {
  taskController = new TaskController();
  quotesController = new QuotesController();
}

window["app"] = new App();
