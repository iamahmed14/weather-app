function processData(data) {
  return {
    city: data.name,
    country: data.sys.country,
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
    if (!response.ok) throw new Error("City not found!");
    const data = processData(await response.json());
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}
