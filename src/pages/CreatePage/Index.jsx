import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import "./createpage.css"

export function CreatePage() {
  const [form, setForm] = useState({
    nome: '',
    imageURL: '',
    sobre: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/plants', { data: { ...form } });
      navigate('/Plants');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Insira abaixo as informações sobre a espécie</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className='form-group'>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome da espécie"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicImg" className='form-group'>
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
            placeholder="URL da imagem"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicSobre" className='form-group'>
          <Form.Label>Sobre</Form.Label>
          <Form.Control
            as="textarea"
            name="sobre"
            value={form.sobre}
            onChange={handleChange}
            placeholder="Descrição sobre a espécie listada"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

