const apikey = '49d1hrKt7KDVCXGPUTtbIHfHTYInu8NM';
const city = document.querySelector('.changeLocation[input]');

const getWeather = async(locationKey) => {
    const base = `https://dataservice.accuweather.com/currentconditions/v1/`;

    const query = `${locationKey}?apikey=${apikey}`;

    const response = await fetch(base + query);
    const data  = await response.json();
    return data[0];
};

//get city info
const getCity = async(city) => {
    //base url of api endpoing that want to make a request to
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${apikey}&q=${city}`;

    const response = await fetch(base + query);
        const data  = await response.json();
        return data[0];
}

