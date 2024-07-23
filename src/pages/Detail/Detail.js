import React from 'react';
import api from "../../services/api";
import Card from "../../components/Card/Card";
import HorizontalScroll from "../../components/Scroll/HorizontalScroll";
import { useParams } from 'react-router-dom';

import './style.css';

export default function Detail(props) {
    const { id } = useParams();

    const getDataPokemonFromAPI = api.pokemons.find((data) => data.id === parseInt(id));
    const evolutionList = api.searchPokemonEvolution(getDataPokemonFromAPI.name);

    let dataPokemon = [];

    if (evolutionList) {
        evolutionList.forEach(element => {
            dataPokemon.push(api.searchPokemonByName(element));
        });
    }

    if (dataPokemon) {
        return (
            <div className="detail-container">
                <div className="centered-container">
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
                <div className="evolution-container">
                    <div className="evolution-title">
                        <h3 className="evolution-title">Evolution Chain</h3>
                    </div>
                    <div className="evolution-list">
                        <HorizontalScroll>
                            {dataPokemon.map((data) => (
                                <Card
                                    id={data.id}
                                    name={data.name}
                                    types={data.types}
                                    attack={data.attack}
                                    defense={data.defense}
                                    speed={data.speed}
                                    hp={data.hp}
                                    image={data.image}
                                    key={data.id}
                                />
                            ))}
                        </HorizontalScroll>
                    </div>
                </div>
            </div>
        )
    }
}