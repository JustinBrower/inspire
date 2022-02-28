import { TaskController } from "./Controllers/TaskController.js";
import { QuotesController } from "./Controllers/QuotesController.js"
import { ImageController } from "./Controllers/ImageController.js"

class App {
  taskController = new TaskController();
  quotesController = new QuotesController();
  imageController = new ImageController();
}

window["app"] = new App();
