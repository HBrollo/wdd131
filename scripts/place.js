const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

document.getElementById('lastmodified').textContent = document.lastModified;

//Initialize weather variables
const Temperature = 14;
document.getElementById('Temperature').textContent = Temperature + " °C";

const windSpeed = 22;
document.getElementById('windSpeed').textContent = windSpeed + " km/h";

//Calculate Wind Chill
const windChillResult = calculateWindChillCelsius(Temperature, windSpeed);

function calculateWindChillCelsius(temperatureCelsius, windSpeedKMPH) {
  if (temperatureCelsius > 10 || windSpeedKMPH < 4.8) 
    {
        return "N/A"; // Wind chill not applicable
    }
  else
  {
    const windChill =
    13.12 +
    0.6215 * temperatureCelsius -
    11.37 * Math.pow(windSpeedKMPH, 0.16) +
    0.3965 * temperatureCelsius * Math.pow(windSpeedKMPH, 0.16);
    return windChill;
   }
}
  
// Display the wind chill
const windChillElement = document.getElementById('windChill');
if (windChillElement) {
  if (windChillResult === "N/A") {
    windChillElement.textContent = "N/A";
  } else {
    windChillElement.textContent = windChillResult.toFixed(1) + " °C"; // Display with one decimal place and units
  }
}

/*//Update weather icon
const weatherIcon = document.querySelector('.weather-icon');

function updateWeatherIcon() {
    if (window.innerWidth >= 768) {
        weatherIcon.src = ''; // Clear the image source
        weatherIcon.alt = '⛅'; // Set the emoji as alt text
        weatherIcon.style.fontSize = '25px'; // Adjust size for emoji
        weatherIcon.style.width = 'auto'; // Reset width
        weatherIcon.style.height = 'auto'; // Reset height
        weatherIcon.style.display = 'inline-block'; // Ensure it displays inline
    } else {
        weatherIcon.src = '../images/weather.svg'; // Reset to the image
        weatherIcon.alt = 'Weather Icon'; // Reset alt text
        weatherIcon.style.width = '30px';
    }
}

// Event listener for window resize
window.addEventListener('resize', updateWeatherIcon);

// Initial call
updateWeatherIcon();*/