
        const apiKey="e45c7d6da4f94264d3157d61f01279cf";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon"); 

        async function getWeatherData(city){
            const response = await fetch(apiUrl+city+ `&appid=${apiKey}`);
            var data = await response.json();


            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png";
            }else if(data.weather[0].main == "Clouds"){ 
                weatherIcon.src = "clouds.png";
            }else if(data.weather[0].main == "Rain"){   
                weatherIcon.src = "rain.png";
            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src.src = "mist.png";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src.src = "drizzle.png"; 
            }else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "snow.png";
            }

            document.querySelector(".weather").style.display="block";
        }        
        searchButton.addEventListener("click", ()=>{
            getWeatherData(searchBox.value);
        });

    

    