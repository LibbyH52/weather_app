//get location from form input
const locationForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    const {cityDets, weather} = data;
    
    //remove d-none class if it is present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


    //update night & day images & icons
    const iconSrc = `static/img/icons/${weather.WeatherIcon}.svg`;
    console.log(iconSrc);
    icon.setAttribute('src', iconSrc);

    let timeImg = weather.IsDayTime ? 'static/img/clouds.png' : 'static/img/moon.jpg';
   
    time.setAttribute('src', timeImg);
    
    //update card with weather details
    details.innerHTML = ` 
                    <h5 class="my-3">${cityDets.EnglishName}</h5>
                    <div class="my-3">${weather.WeatherText}</div>
                    <div class="display-4 my-4">
                        <span>${weather.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                    </div>
                    `;
};

//asychronous function for calling getCity() and getWeather() from forecast.js
const updateLocation = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    console.log(weather);
    return { cityDets, weather};
};

//add eventListener to form

locationForm.addEventListener('submit', e => {
    //prevent default method on event
    e.preventDefault();

    //get value of city using name of input
    const city = locationForm.city.value.trim().toLowerCase();
 
    //reset form once have city value
    locationForm.reset();
    
    //update UI with city name by calling the updateLocation() function
   updateLocation(city)
   .then(data => updateUI(data))
   .catch(err => console.log(err));
})
