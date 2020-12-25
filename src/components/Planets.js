import React, { useEffect, useState } from 'react';
import api from './api';
import View from './View';

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetchPlanets();
    }, []);

    const fetchPlanets = async () => {
        const response = await api.get('');
        setPlanets(response.data);
    };

    return (
        <div>
            <h2>All Planets</h2>
            <div className="item">{planets.map((planet, index) => {
                return (<View planet={planet} key={index} index={index}/>)
                })}
            </div>
        </div>
    );
}

export default Planets;