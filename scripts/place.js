// Footer: Current Year and Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Static weather values for wind chill calculation
const tempCelsius = 26;
const windSpeedKmh = 18;

// Wind chill formula (Celsius)
// Static weather values (as displayed in the HTML)
const temperature = 26;     // Celsius
const windSpeed = 18;       // km/h

// Wind Chill calculation function
function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + ' °C';
}

// Conditionally display wind chill
const windChillOutput = (temperature <= 10 && windSpeed > 4.8)
    ? calculateWindChill(temperature, windSpeed)
    : "N/A";

// Display result in HTML
document.getElementById("windChill").textContent = windChillOutput;