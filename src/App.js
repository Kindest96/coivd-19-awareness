import React from 'react'
import { Grid } from "@material-ui/core";
import { Header, Banner, Stats, Chart, Prevention, Symptoms, Footer, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from './API';

// export const App = () => {
//     return (
//         <div className='container'>
//             <Header />
//             <Grid container direction='column' alignItems='center' justify='center'>
//                 <Banner id='banner' />
//                 <Stats id='stats' />
//                 <CountryPicker />
//                 <Chart id='chart'/>
//                 <Prevention id='prevention'/>
//                 <Symptoms id='symptoms'/>
//             </Grid>
//             <Footer />
//         </div>
//     )
// }

class App extends React.Component{
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData , country: country});
    }

    render() {
        const { data, country } = this.state;

        return (
            <div>
            <Header />
            <Grid container className={styles.container} direction='column' alignItems='center' justify='center'>
                <Banner id='banner' />
                <Stats id='stats' data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart id='chart' country={country}/>
                <Prevention id='prevention'/>
                <Symptoms id='symptoms'/>
            </Grid>
            <Footer />
        </div>  
        );
    };
}

export default App;