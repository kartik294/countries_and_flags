import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(data => {
                setCountries(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            {countries.map(country => (
                <CountryCard
                    key={country.abbr}
                    name={country.name}
                    flagImg={country.flag}
                    flagAltTxt={`Flag of ${country.name}`}
                />
            ))}
        </div>
    );
};

export default Countries;
