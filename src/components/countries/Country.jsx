import React from 'react';

const Country = ({country}) => {
    console.log(country)
    const imageData = country.flags.flags.png
    const imageAltertag = country.flags.flags.alt
    const populationData = country.population.population
    const countryName = country.name.common
    const capitalName = country.capital.capital
    return (
        <div>
            <img src={imageData} alt={imageAltertag} />
            <p>Population: {populationData}</p>
            <p>Name: {countryName}</p>
            <p>Capital: {capitalName}</p>
        </div>
    );
};

export default Country;