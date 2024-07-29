import React, { useEffect, useState } from 'react';
import { ListPokemons } from "../../services/api";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/ControlButton";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const boxStyle = {
    width: "90%",
    margin: "0 auto",
    marginTop: "20px",
    marginBottom: "80px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    textAlign: "center"
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const paginationStyle = {
    marginLeft: "auto"
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [listPokemons, setListaPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const pokemons = await ListPokemons();
        setListaPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        console.error('Error in ListPokemons:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
    const offset = currentPage * itemsPerPage;
    setLoading(true);
    const newPokemonsList = await ListPokemons(offset, itemsPerPage);
    setListaPokemons(newPokemonsList);
    setLoading(false);
  };

  const handlePreviousPage = async () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      const offset = (newPage * itemsPerPage) - itemsPerPage;
      setLoading(true);
      const newPokemonsList = await ListPokemons(offset, itemsPerPage);
      setListaPokemons(newPokemonsList);
      setLoading(false);
    }
  };

  return (
    <div style={boxStyle}>
      <h2>List of pokemons</h2>
      <div style={paginationStyle}>
        <Pagination onClickNext={handleNextPage} onClickPrevious={handlePreviousPage} ></Pagination>
      </div>
      { loading ? (<Loading />) : (
        <div style={cardContainerStyle}>
          {listPokemons.map((item) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                types={item.types}
                hp={item.hp}
                attack={item.attack}
                defense={item.defense}
                speed={item.speed}
                key={item.id}
              />
            );
          })}
        </div>
      )}
      <div style={paginationStyle}>
        <Pagination onClickNext={handleNextPage} onClickPrevious={handlePreviousPage} ></Pagination>
      </div>
    </div>
  );
};

export default Home;
