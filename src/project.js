    function enterCity() {
            let searchInput = document.querySelector(`#city-input`);
            console.log(searchInput);
        }
        let searchInput = document.querySelector(`#placeName`);
        searchInput.addEventListener("submit", enterCity);

    function showTemperature(response) {
        let temperature = Math.round(response.data.main.temp);
        console.log(temperature);
        console.log(response);
        let searchInput = response.data.name;
        let currentTemp = document.querySelector(`#citySearch`);
        currentTemp.innerHTML = temperature;
    }

    let apiKey = "eccd3fb470317e7e03376634726bcaeb";
    let units = "metric";
    let city = "#city-imput";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);