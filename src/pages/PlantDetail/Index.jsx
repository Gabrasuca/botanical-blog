import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";
import "./plants.css"
import { Link, useParams, useNavigate } from "react-router-dom";

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

  async function handleDelete(id) {
    await api.delete(`/plants/${id}`);
    useNavigate("/Plants");
  }




  return (
    <>
      <h2> Plantas listadas </h2>
      {plant.map((currentPlant) => {
        return (
          
          <div key={currentPlant.id}>
          <h2>{currentPlant.attributes.nome}</h2>
          <img src={currentPlant.attributes.imageURL} />
          <p>{currentPlant.attributes.sobre}</p>


          <Link to ={`/edit/${currentPlant.id}`}>
          <button>Editar</button>
          </Link>
          <button onClick={() => handleDelete(currentPlant.id)}>Deletar</button>
          </div>
        );
      })}
    </>
  );
}