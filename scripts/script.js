
        const apiKey="e45c7d6da4f94264d3157d61f01279cf";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon"); 

        async function getWeatherData(city) {

            // Realiza una solicitud a la API de OpenWeatherMap con la ciudad proporcionada y la apiKey.
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            
            // Verifica si la respuesta de la API es 404 (ciudad no encontrada).
            if(response.status==404){ 
              document.querySelector(".error").style.display = "block";
              document.querySelector(".weather").style.display = "none";
            }else{
              // Convierte la respuesta en formato JSON en un objeto JavaScript.
            var data = await response.json();
          
            // Actualiza los elementos del DOM con la información del clima obtenida.
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
          
            // Establece la imagen del ícono del clima según el valor de data.weather[0].main.
            if (data.weather[0].main == "Clear") {
              weatherIcon.src = "clear.png";
            } else if (data.weather[0].main == "Clouds") {
              weatherIcon.src = "clouds.png";
            } else if (data.weather[0].main == "Rain") {
              weatherIcon.src = "rain.png";
            } else if (data.weather[0].main == "Mist") {
              weatherIcon.src = "mist.png"; 
            } else if (data.weather[0].main == "Drizzle") {
              weatherIcon.src = "drizzle.png"; 
            } else if (data.weather[0].main == "Snow") {
              weatherIcon.src = "snow.png";
            }
          
            // Muestra el elemento con clase "weather" estableciendo su propiedad display en "block".
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
            
          }   

          searchBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
              // Verifica si se presionó la tecla Enter
              getWeatherData(searchBox.value);
            }
          });
        searchButton.addEventListener("click", ()=>{
            getWeatherData(searchBox.value);
        });



    

    