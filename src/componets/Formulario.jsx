
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Alert from './Alert'


function Formulario () {

const [nombre, setNombre] = useState('');
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [alertVariant, setAlertVariant] = useState('');

const muestraAlerta = (message, variant) => {
  setAlertMessage(message);
 setAlertVariant(variant);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== password2) {
    muestraAlerta('Las contraseñas no coinciden', 'danger');
    return;
  }

  if (nombre === '' || mail === '' || password === '' || password2 === '') {
    muestraAlerta('Todos los campos son obligatorios', 'danger');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
        muestraAlerta('El email no es válido', 'danger');
        return;
        }

  muestraAlerta('Registro exitoso', 'success');
};

return (
  <>
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" value={mail} onChange={(e) => setMail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Label>Repita su contraseña</Form.Label>
        <Form.Control type="password" placeholder="Repita su contraseña" value={password2} onChange={(e) => setPassword2(e.target.value)} />
      </Form.Group>

      <button className="btn btn-primary" type="submit">
        Registrarse
      </button>
    </Form>
    
    {alertMessage && <Alert message={alertMessage} variant={alertVariant} />}

  </>
);

}

export default Formulario;
