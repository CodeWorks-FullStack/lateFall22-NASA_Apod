import { FavsController } from "./Controllers/FavsController.js";
import { NasaController } from "./Controllers/NasaController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  nasaController = new NasaController();
  favsController = new FavsController();
}

window["app"] = new App();
