import React, { useState } from 'react';
import users from '../users.json';

const Card2 = () => {
    // rnúmero andom entre 0 y 9
    const min = 0;
    const max = users.length-1;
    const pos = Math.floor(Math.random() * (max-min + 1)) + min;

    // color random
    const color = Math.floor(Math.random()*16777215).toString(16);

    const [pos1, setPos1] = useState(0);
    const modificar = () => {
        setPos1(pos);
    }

    const nombreCompleto = `${users[pos].name.title} ${users[pos].name.first} ${users[pos].name.last}`;
    const foto = users[pos].picture.large;
    const email = users[pos].email;
    const telefono = users[pos].phone;
    const ubicacion = `${users[pos].location.city}, ${users[pos].location.country}`;

    return (
        <div className='App2' style={{backgroundColor: `#${color}`}}>
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
                <div className="boton-cambiar" onClick={modificar} style={{backgroundColor: `#${color}`}}>C</div>
            </div>
        </div>
    );
};

export default Card2;