const url = "https://covid19.mathdro.id/api"
const url2 = 'https://api.covid19api.com';

const delay = ms => new Promise(res => setTimeout(res, ms));
// await delay(5000);

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

export const fetchData = async (country) => {
    try {
        let changeableUrl = url;

        if (country) {
            changeableUrl = `${url}/countries/${country}`;
        }

        const response = await fetch( changeableUrl, requestOptions)
        const results = await response.json();
        // const { data: {confirmed, recovered, deaths, lastUpdate } } = results;
        // console.log(results);
        return { 'deaths': results.deaths.value, 'recovered': results.recovered.value, 'infected': results.confirmed.value};
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllData = async (country) => {
    try {
        let changeableUrl = url;
        let modifiedData = [];
        console.log(country)

        if (country) {
            const countrySlug = country.toLowerCase().split(" ").join("-");
            // console.log(countrySlug)
            changeableUrl = `${url2}/total/country/${countrySlug}`;
            const response = await fetch(changeableUrl, requestOptions);
            const data = await response.json();
            modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.Confirmed,
                deaths: dailyData.Deaths,
                recovered: dailyData.Recovered,
                date:  Intl.DateTimeFormat('en',{year:'numeric', month:'2-digit', day:'2-digit'}).format(dailyData.date)
            }));
        } else {
            changeableUrl = `${url}/daily`;
            const response = await fetch(changeableUrl, requestOptions);
            const data = await response.json();
            modifiedData = data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                recovered: dailyData.recovered.total,
                date: dailyData.reportDate
            }));
        }
        
        // console.log(modifiedData)
        
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const response = await fetch(url + '/countries', requestOptions);
        const data = await response.json();
        const { countries } = data;

        // console.log(countries);

        return countries.map((country) => country.name);

        // console.log(response);
    } catch (error) {
        console.log(error)
    }
}