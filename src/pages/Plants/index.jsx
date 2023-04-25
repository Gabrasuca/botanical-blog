import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";

export function PlantList() {
  const [plant, setPlant] = useState([]);
  
  useEffect(() => {
    async function fetchPlant() {
      try {
        const response = await api.get("/plants");

        
        setPlant([... response.data.data]);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPlant();
  }, []);

  return (
    <>
      <h2> Here you can find: </h2>
      {plant.map((currentPlant) => {
        return (
          <h3 key={currentPlant.id}> {currentPlant.attributes.nome}</h3>
        );
      })}
    </>
  );
}