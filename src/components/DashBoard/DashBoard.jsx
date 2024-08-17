import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import Card from "./components/DashBoard/Card.jsx";
import axios from "axios";

const DashBoard = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nxtUrl, setNxtUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    let res = await axios.get(currentPageUrl);
    setNxtUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (resu) => {
    const pokemonData = await Promise.all(
      resu.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setPokeData(pokemonData);
  };

  useEffect(() => {
    pokeFun();
  }, [currentPageUrl]);

  return (
    <div>
      <div className="dash-main">
        <h1>Dashboard</h1>
        <div className="dashcards">
          <Card pokemon={pokeData} loading={loading} />
        </div>
        <div className="btngrup">
          <button
            onClick={() => {
              setCurrentPageUrl(prevUrl);
            }}
            disabled={!prevUrl}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setCurrentPageUrl(nxtUrl);
            }}
            disabled={!nxtUrl}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
