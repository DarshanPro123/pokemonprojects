import React from "react";

const Card = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.slice(0, 20).map((item, index) => {
          return (
            <div className="card" key={index}>
              <h5>{item.id}</h5>
              <img src={item.sprites.front_default} alt={item.name} />
              <h2>{item.name}</h2>
              <h5>{item.types[0].type.name}</h5>
              <div className="info-main">
                <button>About</button>
                <div className="infopokemon">
                  <button>{item.types[0].type.name}</button>
                  <button>{item.stats[0].base_stat}</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;

{
  /* // <div className="card">
    //   <img src="src/assets/legends.png" alt="Zamboanga City" />
    //   <h2>Legends</h2>
    //   <h5>Legends of Zamboanga City</h5>
    //   <div className="info-main">
    //     <button>About</button>
    //     <div className="infopokemon">
    //       <button>Type</button>
    //       <button>Hp</button>
    //     </div>
    //   </div>
    // </div> */
}
