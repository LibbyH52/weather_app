const apikey = 'wXjUBLYnAAAVlJ21hy4Go80N3NaWn7NA';
const city = document.querySelector('.changeLocation[input]');

const getWeather = async(locationKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;

    const query = `${locationKey}?apikey=${apikey}`;

    const response = await fetch(base + query);
    const data  = await response.json();
    return data[0];
};

//get city info
const getCity = async(city) => {
    //base url of api endpoing that want to make a request to
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${apikey}&q=${city}`;

    const response = await fetch(base + query);
        const data  = await response.json();
        return data[0];
}

