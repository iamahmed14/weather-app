function initialDisplay() {
  document.body.innerHTML = `
  <header>
    <h1>Weather</h1>
    <button class="changeCity">Change City</button>
    <input class="hide" placeholder="Enter City" />
  </header>
  
  <div class="weatherDiv">
    <h2 class="city"></h2>
    <h1 class="temp"></h1>
    <h3 class="feels"></h3>
  </div>`;

  return {
    input: document.querySelector("input"),
    button: document.querySelector(".changeCity"),
  };
}
function newWeather(data) {
  document.querySelector("input").value = "";
  document.querySelector(".city").innerText = data.city;
  document.querySelector(".temp").innerText = `${data.temp}°`;
  document.querySelector(".feels").innerText = `Feels Like ${data.feels_like}°`;
}

export { initialDisplay, newWeather };
