import React, { useEffect, useState } from 'react';
import { ListEvolutionsChain, getDataPokemonByName } from "../../services/api";
import { useParams } from 'react-router-dom';
import Card from "../../components/Card/Card";
import HorizontalScroll from "../../components/Scroll/HorizontalScroll";
import Loading from "../../components/Loading/Loading";

import './style.css';

export default function Detail() {
    const { id } = useParams();
    const [selectPokemon, setSelectPokemon] = useState(null);
    const [evolutionList, setEvolutionList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemonData = await getDataPokemonByName(id);
                setSelectPokemon(pokemonData);

                const evolutions = await ListEvolutionsChain(pokemonData.id);
                console.log(evolutions);
                setEvolutionList(evolutions);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="detail-container">
            { loading ? (<Loading />) : (
                <>
                <div className="centered-container">
                    <Card
                        id={selectPokemon.id}
                        name={selectPokemon.name}
                        types={selectPokemon.types}
                        attack={selectPokemon.attack}
                        defense={selectPokemon.defense}
                        speed={selectPokemon.speed}
                        hp={selectPokemon.hp}
                        image={selectPokemon.image}
                    />
                </div>
                
                <div className="evolution-container">
                    <div className="evolution-title">
                        <h3 className="evolution-title">Evolution Chain</h3>
                    </div>
                    <div className="evolution-list">
                        <HorizontalScroll>
                            {evolutionList.map((data) => (
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
                </>
            )}
        </div>
    );
}
