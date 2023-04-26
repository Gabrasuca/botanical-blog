import { useEffect, useState } from "react";
import { api } from "../../utils/api.js";

export function AnimalList() {
  const [animal, setAnimal] = useState([]);
  
  useEffect(() => {
    async function fetchAnimal() {
      try {
        const response = await api.get("/animals");

        
        setAnimal([... response.data.data]);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAnimal();
  }, []);

  return (
    <>
      <h2> Here you can find: </h2>
      {animal.map((currentAnimal) => {
        return (
          <h3 key={currentAnimal.id}> {currentAnimal.attributes.nome}</h3>
        );
      })}
    </>
  );
}
