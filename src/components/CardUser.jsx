import { useState } from 'react';

const CardUser = ({pos, color}) => {
    // useState
    // const [pos, setPos] = useState(0);
    // const cambiarUsuario = () => setPos(pos);

    // resultados
    const nombreCompleto = `${users[pos].name.title} ${users[pos].name.first} ${users[pos].name.last}`;
    const foto = users[pos].picture.large;
    const email = users[pos].email;
    const telefono = users[pos].phone;
    const ubicacion = `${users[pos].location.city}, ${users[pos].location.country}`;

    return (
        <div className="card">
            <span className='nombre' style={{color: `#${color}`}}>{nombreCompleto}</span>
            <div className="contenedor-img">
                <img src={foto} alt="foto"/>
            </div>
            <div className="info">
                <span style={{color: `#${color}`}}>{email}</span>
                <span style={{color: `#${color}`}}>{telefono}</span>
                <span style={{color: `#${color}`}}>{ubicacion}</span>
            </div>
            <div className="boton-cambiar" onClick={cambiarUsuario} style={{backgroundColor: `#${color}`}}>C</div>
        </div>
    )
}

export default CardUser;