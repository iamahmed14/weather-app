import removeImg from "./remove.png";
import celsius from "./celsius.png";
import fahrenheit from "./fahrenheit.png";

function initialDisplay() {
  document.body.innerHTML = `
  <header>
    <h1>Weather</h1>
    <button class="addCity">+ Add City</button>
    <input class="hide" placeholder="Enter City" />
  </header>
  <div class="main"></div>`;

  return {
    input: document.querySelector("input"),
    button: document.querySelector(".addCity"),
  };
}

function newWeather(data) {
  const main = document.querySelector(".main");
  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weatherDiv");

  weatherDiv.innerHTML = `
  <div class="buttons">
    <img class="toggle" src="${celsius}" width="24" />
    <img class="remove" src="${removeImg}" />
  </div>
  <h2 class="city">${data.city},${data.country}</h2>
  <h1 class="temp">${data.temp}°</h1>
  <h3 class="feels">Feels Like ${data.feels_like}°</h3>
  `;
  main.prepend(weatherDiv);

  const temp = document.querySelector(".temp");
  const feels = document.querySelector(".feels");
  const toggle = document.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    if (toggle.src == celsius) {
      toggle.src = fahrenheit;
      temp.innerHTML = `${((data.temp * 9) / 5 + 32).toFixed(2)}°`;
      feels.innerHTML = `Feels Like ${((data.feels_like * 9) / 5 + 32).toFixed(
        2
      )}°`;
    } else {
      toggle.src = celsius;
      temp.innerHTML = `${data.temp}°`;
      feels.innerHTML = `Feels Like ${data.feels_like}°`;
    }
  });

  const remove = document.querySelector(".remove");
  remove.addEventListener("click", () => {
    weatherDiv.remove();
  });

  // const buttons = document.createElement("div");
  // buttons.classList.add("buttons");

  // const toggle = document.createElement("img");
  // toggle.classList.add("toggle");
  // toggle.width = "24";
  // toggle.src = celsius;
  // buttons.appendChild(toggle);

  // const remove = document.createElement("img");
  // remove.classList.add("remove");
  // remove.src = removeImg;
  // buttons.appendChild(remove);

  // weatherDiv.appendChild(buttons);
}

export { initialDisplay, newWeather };
