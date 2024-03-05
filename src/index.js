import "normalize.css";
import css from "./style.css";
import { SetupPage } from "./setup";
import { GetWeatherCurrent } from "./weather";

SetupPage();
GetWeatherCurrent('brisbane');
