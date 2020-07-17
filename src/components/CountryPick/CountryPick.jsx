import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPick.module.css';
import { fetchCountries } from '../../api';

const CountryPick = ( {handleCountryChange} ) => {
    const [fetchedCountries, setFechedCountries ] = useState([]);
    useEffect(() => {
        const fetchedAPI = async () => {
           setFechedCountries(await fetchCountries());
        }
        fetchedAPI();
   }, [setFechedCountries]);
   return (
    <FormControl className={ styles.formControl }>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
            <option value="">Global</option>
             {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
 )
}
export default CountryPick;