import { useEffect, useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

export function Home() {

    return (
        <div className="jumbotron">
            <h1 className="display-4">Bem vindo!</h1>
            <p className="lead">Somos um acervo digital aberto e editável de plantas nativas do Brasil.</p>
            <hr className="my-4" />
            <p>Quer contrinuir conosco?<br />
                Clique no botão abaixo para adicionar uma espécie.</p>
            <a className="btn btn-primary btn-lg" href="/create" role="button" >Vamos lá!</a>
        </div>
    )
}

export function PlantList() {
  const [plant, setPlant] = useState([]); // coloque o hook useState aqui
  
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

    return (
    <>
        <h2> Plantas listadas </h2>
        {plant.map((currentPlant) => {
            return (
                <>
                    <Link to={`/plant/${currentPlant.id}`}><h2>{currentPlant.attributes.nome}</h2></Link>
                    <img src={currentPlant.attributes.imageURL} />


                    <Link to={`/edit/${currentPlant.id}`}>
                        <button>Editar</button>
                    </Link>
                </>
            );
        })}
    </>
    );
}




