import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";
import "./plants.css"
import { Link, useNavigate, useParams } from "react-router-dom";

export function PlantDetail() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState([]);
  
  useEffect(() => {
    async function fetchPlant() {
      try {
        const response = await api.get(`/plants/${plantId}`);

        
        setPlant([... response.data.data]);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPlant();
  }, []);

  async function handleDelete() {
    await api.delete(`/plants/${plantId}`);
    navigate("/");
  }




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