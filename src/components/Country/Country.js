import React from 'react';
import './Country.css'

// const Country = (props) => {
//     console.log(props.country)
//     return (
//         <div className='country'>
//             <img src={props.flag} alt="" srcset="" />
//             <h3>Country Name: {props.name}</h3>
//             <h4>Area: {props.area}</h4>
//             <p>Population: {props.population}</p>
//         </div>
//     );
// };

const Country = (props) => {
    //console.log(props.country)
    //Destructuring 
    const {flags, name, area, population }=props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <h4>Area: {area}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;