import { useState } from 'react';
import './styles.css';
import users from './users.json';

function App() {
  // random entre 0 y 9
  const min = 0;
  const max = users.length-1;
  const posRandom = Math.floor(Math.random() * (max-min + 1)) + min;

  // colores random
  const colorRandom = Math.floor(Math.random()*16777215).toString(16);

  // useState
  const [pos, setPos] = useState(0);
  const cambiarUsuario = () => {
      setPos(posRandom)
  }

  // resultados
  const nombreCompleto = `${users[pos].name.title} ${users[pos].name.first} ${users[pos].name.last}`;
  const foto = users[pos].picture.large;
  const email = users[pos].email;
  const telefono = users[pos].phone;
  const ubicacion = `${users[pos].location.city}, ${users[pos].location.country}`;

  return (
    <div className="App" style={{backgroundColor: `#${colorRandom}`}}>
      <div className="card">
        <span className='nombre' style={{color: `#${colorRandom}`}}>{nombreCompleto}</span>
        <div className="contenedor-img">
          <img src={foto} alt="foto"/>
        </div>
        <div className="info">
          <span style={{color: `#${colorRandom}`}}>{email}</span>
          <span style={{color: `#${colorRandom}`}}>{telefono}</span>
          <span style={{color: `#${colorRandom}`}}>{ubicacion}</span>
        </div>
        <div className="boton-cambiar" onClick={cambiarUsuario} style={{backgroundColor: `#${colorRandom}`}}>C</div>
      </div>
    </div>
  )
}

export default App;