import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './AllCountry.css'

const AllCountry = () => {
    const [countries, setCountries]=useState([])

    useEffect(()=>{
     fetch('https://restcountries.com/v3.1/all')
     .then(res=>res.json())
     .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <h1>Show All Country Details Using API</h1>
            <p>Total Country: {countries.length} </p>
            <div className='countries-container'>
            {
                // countries.map(country=> <Country country={country} name={country.name.common} population={country.population} area={country.area} flag={country.flags.png} ></Country>)

                //Another option

                countries.map(country=> <Country country={country} key={country.cca3}></Country>)
                
            }
            </div>       
        </div>
    );
};


export default AllCountry;