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
}