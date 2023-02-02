function processData(data) {
  return {
    city: data.name,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
  };
}

export default async function getWeatherData(city, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=9b911e01644ba7a5ea6f405f8d71c711`,
      { mode: "cors" }
    );
    const data = processData(await response.json());
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}
