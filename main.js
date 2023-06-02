//impostiamo citta attuale per impostazione predefinita
let currCity = "Rome,it";
let units = "metric";

//Catturo elementi html
let city = document.querySelector(".weather_city");
let datetime = document.querySelector(".weather_datetime");
let weather_forecast = document.querySelector(".weather_forecast");
let weather_temperature = document.querySelector(".weather_temperature");
let weather_icon = document.querySelector(".weather_icon");
let weather_minmax = document.querySelector(".weather_minmax");
let weather_realfeel = document.querySelector(".weather_realfeel");
let weather_humidity = document.querySelector(".weather_humidity");
let weather_wind = document.querySelector(".weather_wind");
let weather_pressure = document.querySelector(".weather_pressure");

//Search
document.querySelector(".weather_search"),
  addEventListener("submit", (e) => {
    let search = document.querySelector(".weather_serarchForm");
    //Prevent default action -> impedisce l'apertura del url, esegue altre operazioni personalizzate
    e.preventDefault();
    // cambia la città corrente
    currCity = search.value;
    getWeather();
    //clear form
    search.value = "";
  });

//Units
document.querySelector(".weather_unit_celsius"),
  addEventListener("click", () => {
    if (units !== "metric") {
      units = "metric";
      getWeather();
    }
  });

document.querySelector(".weather_unit_farenheit"),
  addEventListener("click", () => {
    if (units !== "imperial") {
      units = "imperial";
      getWeather();
    }
  });

//Funzione per l'orario
function convertTimeStamp(timestamp, timezone) {
  const convertTimezone = timezone / 3600;
  const date = new Date(timestamp * 1000);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`,
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

// funzione per mettere il nome del paese per intero
function convertCountryCode(country) {
  let regionName = new Intl.DisplayNames(["en"], { type: "region" });
  return regionName.of(country);
}

// Passiamo tutti i dati
function getWeather() {
  //dati api key
  const API_KEY = "44c89a12755266bd430a22f936f1c911";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`
  )
    .then((res) => res.json())
    .then((data) => {
      city.innerHTML = `${data.name},${convertCountryCode(data.sys.country)}`;
      datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
      weather_forecast.innerHTML = `<p>${data.weather[0].main}</p>`;
      weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
      weather_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`;
      weather_minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
      weather_realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
      weather_humidity.innerHTML = `${data.main.humidity}%`;
      weather_wind.innerHTML = `${data.wind.speed} ${
        units === "imperial" ? "mph" : "m/s"
      }`;
      weather_pressure.innerHTML = `${data.main.pressure} hPa`;
    });
}

document.body.addEventListener("load", getWeather());
