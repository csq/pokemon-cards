import React from 'react';
import api from "../../services/api";
import Card from "../../components/Card/Card";
import { useParams } from 'react-router-dom';

import './style.css';

export default function Detail(props) {
    const { id } = useParams();

    const getDataPokemonFromAPI = api.find((data) => data.id === parseInt(id));

    return (
        <div className="container">
            <Card
                id={getDataPokemonFromAPI.id}
                name={getDataPokemonFromAPI.name}
                types={getDataPokemonFromAPI.types}
                attack={getDataPokemonFromAPI.attack}
                defense={getDataPokemonFromAPI.defense}
                speed={getDataPokemonFromAPI.speed}
                hp={getDataPokemonFromAPI.hp}
                image={getDataPokemonFromAPI.image}
            />
        </div>
    )
}