import React, { useState } from 'react';
import { useEffect } from 'react';
import CountryCard from './CountryCard'; 

const Countries = () => {
   
const API_URL=" https://xcountries-backend.azurewebsites.net/all";
const [countries,setCountries]=useState([]);
console.log({countries})
useEffect(()=>{
   fetch(
    API_URL
   ).then(res=>res.json()).then(data=>setCountries(data))
   .catch((error)=>console.error("Error happening",error))
},[])
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            {countries.map((country) => <CountryCard name={country.name} flagImg={country.flag} flagAlt={country.abbr}/>)}
        </div>
    );
};

export default Countries;
