import { TaskController } from "./Controllers/TaskController.js";
import { QuotesController } from "./Controllers/QuotesController.js"
import { ImageController } from "./Controllers/ImageController.js"
import { WeatherController } from "./Controllers/WeatherController.js"

class App {
  taskController = new TaskController();
  quotesController = new QuotesController();
  imageController = new ImageController();
  weatherController = new WeatherController();
}

window["app"] = new App();
