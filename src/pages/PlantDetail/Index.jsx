import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";
import "./plants.css"
import { Link, useParams, useNavigate } from "react-router-dom";

export function PlantDetail() {
  const [plant, setPlant] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlant() {
      try {
        const response = await api.get("/plants");

        setPlant([...response.data.data]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPlant();
  }, []);

  async function handleDelete(id) {
    await api.delete(`/plants/${id}`);
    navigate("/Plants");
  }

  return (
    <div className="container">
      <h2 className="text-center">Plantas listadas</h2>
      <div className="row">
        {plant.map((currentPlant) => {
          return (
            <div key={currentPlant.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={currentPlant.attributes.imageURL}
                  alt={currentPlant.attributes.nome}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{currentPlant.attributes.nome}</h5>
                  <p className="card-text">{currentPlant.attributes.sobre}</p>
                  <Link to={`/edit/${currentPlant.id}`} className="btn btn-primary">
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(currentPlant.id)}
                    className="btn btn-danger ms-2"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}