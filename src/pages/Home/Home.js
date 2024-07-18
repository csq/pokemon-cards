import React from 'react';
import api from "../../services/api";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/ControlButton";
import { useState } from 'react';

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
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage * itemsPerPage >= api.length) {
      setCurrentPage(currentPage);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);

    if (currentPage === 1) {
      setCurrentPage(1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedApi = api.slice(startIndex, endIndex);

  return (
    <div style={boxStyle}>
      <h2>List of pokemons</h2>
      <div style={paginationStyle}>
        <Pagination onClickNext={handleNextPage} onClickPrevious={handlePreviousPage} ></Pagination>
      </div>
      <div style={cardContainerStyle}>
        {paginatedApi.map((item) => {
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
      <div style={paginationStyle}>
        <Pagination onClickNext={handleNextPage} onClickPrevious={handlePreviousPage} ></Pagination>
      </div>
    </div>
  );
};

export default Home;
