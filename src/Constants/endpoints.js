const BASE_URL = 'https://restcountries.com/v2'


const endpoints = {
    getCountries : () => `${BASE_URL}/all`,
    getSearchedCountries : (name) => `${BASE_URL}/name/${name}`,
    getFilterdCountries : (region) => `${BASE_URL}/region/${region}`,
    getCountry : (code) => `${BASE_URL}/alpha/${code}`
}


export default endpoints