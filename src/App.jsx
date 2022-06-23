import { useState } from 'react';
import './styles.css';
import users from './users.json';

function App() {
  const [pos, setPos] = useState(0);
  const cambiarUsuario = () => {
    if(pos!=9) setPos(pos+1);
  }
  const nombreCompleto = users[pos].name.title + " " + users[pos].name.first + " " + users[pos].name.last;
  const url_foto = users[pos].picture.large;

  return (
    <div className="App">
      <h1>{nombreCompleto}</h1>
      <img src={url_foto} alt="foto"/>
      <button onClick={cambiarUsuario}>Cambiar user</button>
    </div>
  )
}

export default App;