//9b911e01644ba7a5ea6f405f8d71c711
//units - metric - imperial
import "./style.css";
import { initialDisplay, newWeather } from "./view";
import getWeatherData from "./getWeather";

async function handleWeatherRequest(city) {
  const data = await getWeatherData(city, "metric");
  newWeather(data);
}

async function initialLoad() {
  function toggleHide() {
    search.input.classList.toggle("hide");
    search.button.classList.toggle("hide");
  }

  const search = initialDisplay();

  search.button.addEventListener("click", () => {
    toggleHide();
    search.input.value = "";
    search.input.focus();
  });

  search.input.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      if (search.input.value) {
        handleWeatherRequest(search.input.value);
      }
      toggleHide();
    }
  });
  handleWeatherRequest("karachi");
}

window.addEventListener("load", initialLoad);
