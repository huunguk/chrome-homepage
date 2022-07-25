//나의 api key
const API_KEY = "7ee330c8d6bd05e8e5047212c18b59e0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp}°C ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition는 두개의argument가 필요하다.
// 1.모든게 잘 됐을때 실행될 함수 2.에러가 발생했을때 실행할 함수
