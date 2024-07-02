document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '6744a7208d77eff2157cf91cbb161c05';
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const zipCode = document.getElementById('zip-code').value;
        if (zipCode) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;
            fetchWeatherData(apiUrl);
        } else {
            alert('Please enter a ZIP code');
        }
    });

    function fetchWeatherData(apiUrl) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                updateWeatherData(data);
            })
            .catch(error => console.error('Error fetching the weather data:', error));
    }

    function updateWeatherData(data) {
        const cityElement = document.getElementById('city');
        const weatherDescriptionElement = document.getElementById('weather-description');
        const temperatureElement = document.getElementById('temperature');
        const highTemperatureElement = document.getElementById('highTemperature');
        const lowTemperatureElement = document.getElementById('lowTemperature');


        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');
        const backgroundElement = document.getElementById('background');

        cityElement.textContent = data.name;
        weatherDescriptionElement.textContent = data.weather[0].description;
        temperatureElement.innerHTML = `${Math.round(data.main.temp)}&#176;F`;
        highTemperatureElement.innerHTML = `${Math.round(data.main.temp_max)}&#176;F`;
        lowTemperatureElement.innerHTML = `${Math.round(data.main.temp_min)}&#176;F`;

        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        dateElement.textContent = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const weatherCondition = data.weather[0].main.toLowerCase();
        let backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ohyPP8rhEZ21_3PyDdXs7QHaE8%26pid%3DApi&f=1&ipt=8754df52023b9fff96fb675e06f1cd662ec7fa79aeb0a85c48f7609c77986a49&ipo=images';

        switch (weatherCondition) {
            case 'clear':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eFeaQKj4D6oz9LpcUTAvIgHaEo%26pid%3DApi&f=1&ipt=e8072496a498558e1bc27ee84bfe921a6f5dd5d28e6c6ba82c6095622f83e0c2&ipo=images';
                break;
            case 'clouds':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iGj5ukurzMPzJNA-ZIjbiwHaEK%26pid%3DApi&f=1&ipt=a08fa31f40c0d9d196f3c7606ca743e9f9d90b93d44d4ba573de7962dfb7fd19&ipo=images';
                break;
            case 'rain':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9099992.jpg&f=1&nofb=1&ipt=3057bf66ed94ddf6b9ba7b62aaa8477e7fabc62d470090819c5e25399a5434d9&ipo=images';
                break;
            case 'snow':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-JNrZdHc3UtYehab8Iw2tQHaE8%26pid%3DApi&f=1&ipt=bfc721eb4fbff8c72971fdfedf997aedc0c36aee82da5d8c5575d0f8bc9668bb&ipo=images';
                break;
            case 'thunderstorm':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1KZnNREQKsJPoGBHtgJB4QEsCo%26pid%3DApi&f=1&ipt=78c03f13cf04e162de9d98de99f65331f02e91ef37ec40dd2a120cec0b6072fd&ipo=images';
                break;
            case 'tropical storm':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RljokMeBeShSfv_mBv8_TgHaE7%26pid%3DApi&f=1&ipt=f8777539dd026c5d7253f8d4a899d9bcdaa215131884c208ca97bd16aa3d451c&ipo=images';
                break;
            case 'tornado':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Wr7Gv3J0oaOV-SywgqzfCQHaE8%26pid%3DApi&f=1&ipt=034b4336d2ca8d0891ec4914daa2ac44aa78e4955cf48932a9b8c0c8ce4ee7a9&ipo=images';
                break;
            case 'hurricane':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.7Dn9uBm7aOI0WqAuyPHduwHaD5%26pid%3DApi&f=1&ipt=f0080c1bf01c97162052f189e9582647fa046c8176bc06d31fbc4682a2c5ae20&ipo=images';
                break;
            case 'blizzard':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0ZopUW2WM9O5P7JPIljldAHaFj%26pid%3DApi&f=1&ipt=8ca99cf63b3a305db1d59fe9febc5edf93431d996ef9b0c76d4599a669190866&ipo=images';
                break;
            case 'hail':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4TbLlZSllBIS0efBDaBzzgHaE7%26pid%3DApi&f=1&ipt=1542a06cefd9691d4d3f666c1d5dfe555e92ea6bf7b03c88b5a9657c9944cf75&ipo=images';
                break;
            case 'heatwave':
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.tdworld.com%2Ffiles%2Fbase%2Febm%2Ftdworld%2Fimage%2F2021%2F06%2Fdreamstime_m_123441197.60cb9288ca210.png%3Fauto%3Dformat%2Ccompress%26fit%3Dcrop%26h%3D652%26w%3D1500%26q%3D45&f=1&nofb=1&ipt=4abcbfd17a1078461b6e5c70d7314910c20d153b9f95f786eb34decb79c03f65&ipo=images';
                break;
            default:
                backgroundUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ohyPP8rhEZ21_3PyDdXs7QHaE8%26pid%3DApi&f=1&ipt=8754df52023b9fff96fb675e06f1cd662ec7fa79aeb0a85c48f7609c77986a49&ipo=images';
        }

        backgroundElement.style.backgroundImage = `url('${backgroundUrl}')`;
        backgroundElement.style.backgroundRepeat = ` no-repeat`;
    }
});
console.log(apiUrl);
