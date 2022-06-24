import React, { useState } from 'react';
import users from '../users.json';

const Card2 = () => {
    const random = Math.floor(Math.random() * users.length);
    const color = Math.floor(Math.random()*16777215).toString(16);

    const [index, setIndex] = useState(random);
    const cambiarUsuario = () => {
        const random2 = Math.floor(Math.random() * users.length);
        setIndex(random2);
    }

    const nombreCompleto = `${users[index].name.title} ${users[index].name.first} ${users[index].name.last}`;
    const foto = users[index].picture.large;
    const email = users[index].email;
    const telefono = users[index].phone;
    const ubicacion = `${users[index].location.city}, ${users[index].location.country}`;

    return (
        <div className='App2' style={{backgroundColor: `#${color}`}}>
            <div className="card">
                <span className='nombre' style={{color: `#${color}`}}>{nombreCompleto}</span>
                <div className="contenedor-img">
                    <img src={foto} alt="foto"/>
                </div>
                <div className="info">
                    <span style={{color: `#${color}`}}><i className="fa-solid fa-envelope"></i> {email}</span>
                    <span style={{color: `#${color}`}}><i className="fa-solid fa-phone"></i> {telefono}</span>
                    <span style={{color: `#${color}`}}><i className="fa-solid fa-location-dot"></i> {ubicacion}</span>
                </div>
                <div className="boton-cambiar" onClick={cambiarUsuario} style={{backgroundColor: `#${color}`}}>
                    <i class="fa-solid fa-recycle"></i>
                </div>
            </div>
        </div>
    );
};

export default Card2;