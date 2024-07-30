const apiKey = '07686bf38324478da258f38ab0fe9f19'; // Substitua pela sua chave de API do OpenWeatherMap
async function getWeather() {  
  const city = document.getElementById('city').value;  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;   
 try {      
  const response = await fetch(url);     
   if (!response.ok) {     
       throw new Error('City not found');   
     }        
const data = await response.json();        
displayWeather(data);  
  } catch (error) {    
    alert(error.message);  
  }}
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');  
  weatherDiv.innerHTML = `   
     <h2>${data.name}, ${data.sys.country}</h2>    
    <p>Temperature: ${data.main.temp}°C</p>    
    <p>Weather: ${data.weather[0].description}</p>   
     <p>Humidity: ${data.main.humidity}%</p>     
   <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;}
