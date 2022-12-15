import React from 'react';

const Redes = (props) =>{
    const iconos = props.enlaces.map((enlace) =>
        <li key={enlace.idEnlace}><a href={enlace.enlace}><i className={enlace.clase}></i></a></li>
    );

    return(
        <ul className="redes">
            {iconos}
        </ul>
    );
}

export default Redes;