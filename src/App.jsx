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
  const nombreCompleto = users[pos].name.title + " " + users[pos].name.first + " " + users[pos].name.last + " pos: " + pos;
  const foto = users[pos].picture.large;

  return (
    <div className="App" style={{backgroundColor: `#${colorRandom}`}}>
      <h1>{nombreCompleto}</h1>
      <img src={foto} alt="foto"/>
      <button onClick={cambiarUsuario}>Cambiar user</button>
      <span>{posRandom}</span>
    </div>
  )
}

export default App;