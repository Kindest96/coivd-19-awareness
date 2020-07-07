import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../API';
import styles from './CountryPicker.module.css';
import { Grid, FormControl, NativeSelect } from '@material-ui/core';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries])

    return (
        <Grid item>
            <FormControl>
                <NativeSelect defaultValue='' onClick={(e) => handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </Grid>
    )
}

export default CountryPicker;