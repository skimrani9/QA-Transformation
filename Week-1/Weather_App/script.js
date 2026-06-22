async function SearchWeather(){
    let cityName = document.querySelector(".city_name_input").value;
    if(!cityName){
        alert("Please enter a city name");
        return;
    }
    const api_url = `https://api.weatherapi.com/v1/current.json?key=87c1b56629f7435ead465951261506&q=${cityName}`
    const response =  await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city-name").textContent = data.location.name;
    document.querySelector(".region-country").textContent = data.location.region;
    document.querySelector(".temperature").textContent = data.current.temp_c;
    document.querySelector(".condition").textContent = data.current.condition.text;
    document.querySelector(".feels-like").textContent = `Feels like ${data.current.feelslike_c}°C`;
    document.querySelector(".wind_mph").textContent = `${data.current.wind_mph} mph`;
    document.querySelector(".wind_dir").textContent = data.current.wind_dir;
    document.querySelector(".gust_kph").textContent = `${data.current.gust_kph} km/h`;
    document.querySelector(".humidity").textContent = `${data.current.humidity}%`;
    document.querySelector(".cloud").textContent = `${data.current.cloud}%`;
    document.querySelector(".pressure_mb").textContent = `${data.current.pressure_mb} mb`;
    document.querySelector(".precip_mm").textContent = `${data.current.precip_mm} mm`;
    document.querySelector(".feelslike_c").textContent = `${data.current.feelslike_c} °C`;
    document.querySelector(".heatindex_c").textContent = `${data.current.heatindex_c} °C`;
}