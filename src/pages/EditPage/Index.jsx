import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import "./editpage.css"
export function EditPage () {
  const [form, setForm] = useState({
    nome:"",
    imageURL:"",
    sobre:"",
  });

  const { plantId } = useParams()

  useEffect(() => {
    async function fetchPlant() {
      const response = await api.get(`/plants/${plantId}`)
      setForm({ ...response.data.data.attributes });
    }
    fetchPlant();
  }, []);

  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/plants/${plantId}`, { data: form });
      navigate("/Plants");
    
    } catch (e) {
      console.log(e);
    }
  }
    
  return (
  
      <div className="container mt-4">
      <h3 className="mb-4">Editar informações</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className='form-group'>
          <Form.Label>Nome</Form.Label>
          <Form.Control name="nome" value={form.nome} onChange={handleChange} placeholder="Nome da espécie" />
        </Form.Group>

        <Form.Group controlId="formBasicImg" className='form-group'>
          <Form.Label>Imagem</Form.Label>
          <Form.Control name="imageURL" value={form.imageURL} onChange={handleChange} placeholder="Imagem URL" />
        </Form.Group>
        
        <Form.Group controlId="formBasicSobre" className='form-group'>
          <Form.Label>Sobre</Form.Label>
          <Form.Control name="sobre" value={form.sobre} onChange={handleChange} placeholder="Descrição sobre a espécie listada" as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </div>

  );
}