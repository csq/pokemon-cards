import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { getDataPokemonByName } from "../../services/api";
import Card from "../Card/Card";

export default function Search() {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setPokemonName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setPokemonData(null);

        try {
            const data = await getDataPokemonByName(pokemonName.trim().toLowerCase());

            if (data) {
                setPokemonData(data);
            } else {
                setError('Pokemon not found');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <Form.Control
                    style={{ width: "50%", marginTop: "20px" }}
                    type="search"
                    placeholder="Search Pokemon by name or ID"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleInputChange}
                    value={pokemonName}
                />
            </Form>

            {error && <p style={{ color: 'red', marginTop: '20px', fontSize: '18px' }}>{error}</p>}

            {pokemonData && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <Card
                        id={pokemonData.id}
                        name={pokemonData.name}
                        image={pokemonData.image}
                        attack={pokemonData.attack}
                        defense={pokemonData.defense}
                        speed={pokemonData.speed}
                        hp={pokemonData.hp}
                    />
                </div>
            )}
        </>
    );
}
