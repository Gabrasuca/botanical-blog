import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";
import "./plants.css"
import { Link } from "react-router-dom";

export function PlantDetail() {
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
      <h2> Plantas listadas </h2>
      {plant.map((currentPlant) => {
        return (
          <>
          <h2>{currentPlant.attributes.nome}</h2>
          <img src={currentPlant.attributes.imageURL} />
          <p>{currentPlant.attributes.sobre}</p>


          <Link to ={'/edit/${plantId}'}>
          <button>Editar</button>
          </Link>
          </>
        );
      })}
    </>
  );
}