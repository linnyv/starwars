import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchingTheStarWarsStarships = async () => {
      const infoOnShips = await getAllStarships();
      return infoOnShips;
    };
    fetchingTheStarWarsStarships().then((infoOnShips) => {
      setStarships(infoOnShips);
    });
  }, []);

  return (
    <div className="App">
      <h2
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          margin: "0"
        }}
      >
        STAR WARS STARSHIPS
      </h2>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
}

export default App;