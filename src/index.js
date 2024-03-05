import "normalize.css";
import css from "./style.css";
import { SetupPage, SetupHeader, SetupContent } from "./setup";
import { GetWeatherCurrent } from "./weather";

SetupPage();
SetupHeader();
SetupContent();

GetWeatherCurrent('brisbane');
