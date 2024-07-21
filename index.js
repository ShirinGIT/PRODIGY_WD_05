const apiKey = '1d9f78e30b2044005ce9938e00c57fb2';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const autocompleteApiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

const locationInput = document.getElementById('location');
const submitButton = document.getElementById('submit');
const weatherDataContainer = document.getElementById('weather-data');
const locationNameElement = document.getElementById('location-name');
const weatherConditionElement = document.getElementById('weather-condition');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    if (location) {
        fetchWeatherData(location);
    }
});

locationInput.addEventListener('input', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchAutocompleteData(location);
    } else {
        dropdownContainer.style.display = 'none';
    }
});
function fetchWeatherData(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error(error));
}
function displayWeatherData(data) {
    locationNameElement.textContent = data.name;
    weatherConditionElement.textContent = `Weather: ${data.weather[0].description}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp.toFixed(0)}°C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherDataContainer.style.display = 'block';
}