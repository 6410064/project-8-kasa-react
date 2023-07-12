import React from 'react'
import { useParams } from 'react-router-dom';


let locations = require('../data.json');

const Location = () => {
    const { id } = useParams();
    console.log(id)

    const location = locations.find((loc) => loc.id === id)
    console.log(location)

    return <div>
        {location.title}
    </div>
}

export default Location;