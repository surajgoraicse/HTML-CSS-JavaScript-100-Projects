const body = document.querySelector('body')
const input = document.querySelector('.card .search input');
const search = document.querySelector('.card .search button')
const weatherImage = document.querySelector('.weather-info img')
const temperature = document.querySelector('.weather-info .temp')
const city = document.querySelector('.weather-info .city')
const humidity = document.querySelector('.details .col .text .humidity')
const wind = document.querySelector('.details .col .text .wind')
const hero = document.querySelector('.container')
const villen = document.querySelector('.error')

//images
function importImage(value) {
    if (value >= 200 && value <= 250 || value >= 500 && value <= 550) {
        return 'images/rain.png'
    }
    if (value >= 300 && value <= 350) {
        return 'images/drizzle.png'
    }
    if (value >= 600 && value <= 650) {
        return 'images/snow.png'
    }
    if (value == 800) {
        return 'images/clear.png'
    }
    if (value > 800 && value < 850) {
        return 'images/clouds.png'
    }
    if (value >= 700 && value <= 750) {
        return 'images/mist.png'
    }
}

// Get Weather function

function getWeather() {
    const location = input.value.trim().toLowerCase();
    console.log(location);
    const key = "811e03360f3c984e29e402bac32be8fc";

    (async function getData() {

        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},ind&appid=${key}&units=metric`);

            // Getting values

            const jsonData = await data.json();
            const humid = jsonData.main.humidity;
            const temp = Math.floor(jsonData.main.temp);
            const windSpeed = jsonData.wind.speed;
            const loc = jsonData.name;
            const imgId = jsonData.weather[0].id;
            const img = importImage(imgId);


            // printing values

            console.log(temp);
            console.log(humid);
            console.log(windSpeed);
            console.log(loc);
            console.log(imgId);
            console.log(img)


            // DOM manipulations
            
            villen.style.display = 'none'
            hero.style.display = 'block';
            weatherImage.setAttribute('src', img);
            temperature.innerHTML = `${temp}<sup>°</sup> C`;
            city.innerHTML = loc;
            humidity.innerHTML = humid + ' %';
            wind.innerHTML = (windSpeed * 18 / 5).toFixed(2) + ' Km/hr';

        } catch (error) {
            console.log('error encountered : ', error);
            hero.style.display = 'none';
            villen.style.display = 'block'
        }
        finally {
            console.log('fetch complete');
        }
    })();

}

// EVENTs

search.addEventListener('click', getWeather);
body.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == 'Enter') {
        getWeather();
    }
})
